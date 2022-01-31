import { useState } from "react";
import Context from "./Context";

const Provider = ({children}) => {
  const [lightTheme, setLightTheme] = useState(false);

  const toggleTheme = () => {
    setLightTheme((prev) => !prev);
  }

  return (
    <Context.Provider
        value={{
          lightTheme,
          toggleTheme
        }}>
        {children}
    </Context.Provider>
);
}

export default Provider;