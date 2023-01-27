import { useState, createContext, useContext } from "react";

const ApplicationContext = createContext();

export const StateProvider = ({children}) => {
  const [user, setUser] = useState();

  return (
    <ApplicationContext.Provider value = {{user, setUser}}>
      {children}
    </ApplicationContext.Provider>
  )
}

export const useApplicationState = () => {
  const context = useContext(ApplicationContext);
  return context;
};
