import React, { createContext, useState } from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useLocalStorage } from "../hooks/UseLocalStorage";
import {getStoreByEmail} from "../services/store";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const [login, setLogin] = useLocalStorage("login", "");
  const [dataUser, setDataUser] = useLocalStorage('dataUser', "")

  const auth = getAuth();

  const loginWithEmail = async (email, password) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const store = await getStoreByEmail(email);

      if (store.storeId) {
        setDataUser(store) 
      }
      setLogin(true);
    } catch (e) {
      setDataUser(null)
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setLogin(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{ loginWithEmail, login, dataUser, loading, logout }}>
      {children}
    </UserContext.Provider>
  );
};
