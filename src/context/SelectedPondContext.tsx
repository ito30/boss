"use client"

import { createContext, useContext, useState } from "react";

interface SelectedPondContextType {
  selectedPond: string;
  onPondChange: (value: string) => void;
}

const SelectedPondContext = createContext<SelectedPondContextType>(({
  selectedPond: "",
  onPondChange: () => {}
}));

const SelectedPondProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedPond, setSelectedPond] = useState<string>("");

  const onPondChange = (value: string) => {
    setSelectedPond(value)
  }
  return (
    <SelectedPondContext.Provider value={{ selectedPond, onPondChange }}>
      {children}
    </SelectedPondContext.Provider>
  );
};

const useSelectedPond = () => {
  const context = useContext(SelectedPondContext);
  if (context === undefined) {
    throw new Error('useSelectedPond must be used within a SelectedPondProvider');
  }
  return context;
};

export { SelectedPondProvider, useSelectedPond }