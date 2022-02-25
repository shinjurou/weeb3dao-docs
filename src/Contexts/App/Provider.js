import { useState } from "react";
import Context from "./Context";

const Provider = ({children}) => {
  const [lightTheme, setLightTheme] = useState(false);
  const [locale, setLocale] = useState('');

  const toggleTheme = () => {
    setLightTheme((prev) => !prev);
  }

  const setAppLocale = (newLocale) => {
    setLocale(newLocale);
  }

  return (
    <Context.Provider
        value={{
          lightTheme,
          toggleTheme,
          appLocale:locale,
          setAppLocale
        }}>
        {children}
    </Context.Provider>
);
}

export default Provider;