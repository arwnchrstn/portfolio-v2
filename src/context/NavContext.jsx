import { createContext, useReducer } from "react";
import { navReducer } from "../reducer/NavReducer";

export const NavContext = createContext({});

const NavContextProvider = ({ children }) => {
  const [elements, dispatch] = useReducer(navReducer, {
    about: false,
    projects: false,
    skills: false,
    exp: false,
    education: false
  });

  return (
    <NavContext.Provider value={{ elements, dispatch }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavContextProvider;
