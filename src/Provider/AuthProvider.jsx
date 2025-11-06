/* eslint-disable react-refresh/only-export-components */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} 
from "firebase/auth";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../firebase/fire.int";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoging] = useState(true);
  const [error, setError] = useState("");

  const createUser = (email, password) => {
    setLoging(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUser =  (updateData)=>{
    console.log(updateData);
    
    return updateProfile(auth.currentUser,updateData)

  }
  const signin = (email, password) => {
    setLoging(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unUser = onAuthStateChanged(auth, (crenatUser) => {
      setUser(crenatUser);
      setLoging(false);
    });
    return () => {
      unUser();
    };
  }, []);
  const authdata = {
    user,
    setUser,
    createUser,
    logOut,
    signin,
    setLoging,
    loading,
    error,
    setError,
    updateUser
  };
  return <AuthContext value={authdata}>{children}</AuthContext>;
};
export default AuthProvider;
