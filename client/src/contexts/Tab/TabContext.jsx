import React, { createContext, useContext, useState } from "react";

const TabContext = createContext();
const TabProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TabContext.Provider value={{ setIsOpen, isOpen }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTabContext = () => useContext(TabContext);

export default TabProvider;
