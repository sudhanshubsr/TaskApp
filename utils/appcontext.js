"use client";

import { createContext, useContext, useState } from "react";
const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [assignedUser, setAssignedUser] = useState("");
  const [date, setDate] = useState("");


  return (
    <AppContext.Provider
      value={{
        title,
        setTitle,
        description,
        setDescription,
        status,
        setStatus,
        assignedUser,
        setAssignedUser,
        date,
        setDate,

      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
