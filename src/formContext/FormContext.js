"use client";
import React, { useState, createContext } from "react";

const FormContext = createContext(null);

const FormProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const updateFormField = (field, value) => {
    setUser((prevUser) => ({ ...prevUser, [field]: value }));
  };

  return (
    <FormContext.Provider value={{ user, updateFormField }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormProvider, FormContext };
