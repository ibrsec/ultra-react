

import {Children, createContext, useContext, useState} from 'react';

export const LoginContext = createContext();

const LoginProvider = ({children}) => {
  // const [isLogged,setIsLogged] = useState(localStorage.getItem("isLoggedUltra") || false);
  const [isLogged,setIsLogged] = useState(false);
  console.log('islogged - contexte=',isLogged);
  return (
    <LoginContext.Provider value={{isLogged,setIsLogged}} >
      {children}
    </LoginContext.Provider>
  )
}


export const useLoginContext = () => {
  return useContext(LoginContext);
}



export default LoginProvider;