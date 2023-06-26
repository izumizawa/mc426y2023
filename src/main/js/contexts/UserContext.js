import React, { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useLocalStorage } from "../hooks/UseLocalStorage";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [dataUser, setDataUser] = useState({});

  const [login, setLogin] = useLocalStorage("login", "");

  const auth = getAuth();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          setDataUser({uid: user.uid, email: user.email});
        } else {
          console.log("user is logged out")
        }
      });
     
  }, [])

  const getCurrentUser = () => {
    return dataUser;
  };


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
      value={{ loginWithEmail, login, getCurrentUser, loading, logout }}>
      {children}
    </UserContext.Provider>
  );
};
