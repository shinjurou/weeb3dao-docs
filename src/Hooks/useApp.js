import { useContext } from "react";
import { AppContext } from "../Contexts/App";

const useApp = () => {
  return { ...useContext(AppContext) };
};

export default useApp;
