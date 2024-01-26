"use client";
import { createContext, useContext, useState } from "react";

const OurServiceModalContext = createContext(null);
export const useOurServiceModal = () => useContext(OurServiceModalContext);

const OurServiceModalProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };
  return (
    <OurServiceModalContext.Provider value={{ show, showModal, closeModal }}>
      {children}
    </OurServiceModalContext.Provider>
  );
};

export default OurServiceModalProvider;
