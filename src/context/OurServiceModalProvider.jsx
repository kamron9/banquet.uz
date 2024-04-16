"use client";
import { createContext, useContext, useState } from "react";

const OurServiceModalContext = createContext(null);
export const useOurServiceModal = () => useContext(OurServiceModalContext);

const OurServiceModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <OurServiceModalContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </OurServiceModalContext.Provider>
  );
};

export default OurServiceModalProvider;
