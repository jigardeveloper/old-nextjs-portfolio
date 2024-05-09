import React, { createContext, useState, useContext } from "react";

interface LanguageContextValue {
  language: "ગુજરાતી" | "English" | "hindi";
  setLanguage: (language: "ગુજરાતી" | "English" | "hindi") => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<"ગુજરાતી" | "English" | "hindi">(
    "English"
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export { LanguageProvider, useLanguage };
