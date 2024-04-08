'use client';
import React, { createContext } from 'react';

export type ContextType = {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
};

export const defaultSideMenuValues: ContextType = {
  isOpen: true,
  setOpen: () => {},
};

export const SideMenuContext = createContext<ContextType>(
  defaultSideMenuValues
);

export const SideMenuContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setOpen] = React.useState(true);
  return (
    <SideMenuContext.Provider value={{ isOpen: isOpen, setOpen: setOpen }}>
      {children}
    </SideMenuContext.Provider>
  );
};
