import React from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <div className="min-h-dvh w-dvw" data-theme="light">
      {children}
    </div>
  );
};

export default ThemeProvider;
