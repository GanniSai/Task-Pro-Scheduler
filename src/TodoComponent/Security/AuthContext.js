import { createContext,useContext,useState } from "react";

//create a context
export const AuthContext=createContext()

//assign a state

//use that accross all the components
export const useAuth=()=>useContext(AuthContext)


export default function AuthProvider({children})
{
    const[isAuthenticated,setIsAuthenticated]=useState(false)

    
return(
    <AuthContext.Provider value={{isAuthenticated,setIsAuthenticated}}>
        {children}
    </AuthContext.Provider>
)
}