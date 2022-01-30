import { useContext } from "react";
import { ThemeContext } from "../Contexts/CustomTheme";

const useCustomTheme = () => {
  return { ...useContext(ThemeContext) };
};

export default useCustomTheme;
