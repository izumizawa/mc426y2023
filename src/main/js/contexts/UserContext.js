import React, {createContext, useState} from "react";
import {getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {useLocalStorage} from "../hooks/UseLocalStorage";

export const UserContext = createContext();

export const UserStorage = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [dataUser, setDataUser] = useState({});
  const [error, setError] = useState(null);

  const [login, setLogin] = useLocalStorage("login", "");

  const auth = getAuth();

  const loginWithEmail = async (email, password) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLogin(true);
    } catch (e) {
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
      value={{loginWithEmail, login, dataUser, loading, error, logout}}>
      {children}
    </UserContext.Provider>
  );
};
