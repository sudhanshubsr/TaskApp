"use client";

import { createContext, useContext, useState } from "react";
const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [assignedUser, setAssignedUser] = useState("");
  const [date, setDate] = useState("");
  const [newTitle, setnewTitle] = useState(title);
  const [newdescription, setnewDescription] = useState(description);
  const [newstatus, setnewStatus] = useState(status);
  const [newassignedUser, setnewAssignedUser] = useState(assignedUser);
  const [newdate, setnewDate] = useState(date);



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
        newTitle,
        setnewTitle,
        newdescription,
        setnewDescription,
        newstatus,
        setnewStatus,
        newassignedUser,
        setnewAssignedUser,
        newdate,
        setnewDate,

      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
