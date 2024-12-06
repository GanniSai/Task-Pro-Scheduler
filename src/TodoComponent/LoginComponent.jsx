import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import { useAuth } from "./Security/AuthContext"


export default function LoginComponent()
{
    const[userName,setUserName]=useState("GanniSai")
    const[passWord,setPassword]=useState("")
    const[successLogin,showSuccessLogin]=useState(false)
    const[errorLogin,showErrorLogin]=useState(false)
    const navigate=useNavigate()
    const setAuth=useAuth()

    function HandleChangeUsername(event)
    {
       setUserName(event.target.value)
    }




    function HandleChangePassword(event)
    {
       setPassword(event.target.value)
    }

    function HandleLogin()
   {
    if(userName==="GanniSai" && passWord==="Clevera")
    {
        setAuth.setIsAuthenticated(true)
        showSuccessLogin(true) 
        
        showErrorLogin(false) 
        navigate(`/welcome/${userName}`)
       // console.log(successlogin)
    }
    else{
        setAuth.setIsAuthenticated(false)
        showErrorLogin(true)
        
        showSuccessLogin(false)
       // console.log(errorLogin)
    }
}
return(
    <>
    <div className="LoginCheck">
    {/* <SuccessMessageComponent />
    <ErrorMessageComponent /> */}
     {successLogin && <h2 style={{color:"green"}}>User Verified</h2>}
     {errorLogin && <h2 style={{color:"red"}}>Check Credentials</h2>}

    <h2> USER LOGIN </h2>
    <br/>
    <div className="Login">
    <label>UserName : </label>
    <input type="text" value={userName} onChange={HandleChangeUsername}></input> <br/><br/>
    <label>Password : </label>
    <input type="password" value={passWord} onChange={HandleChangePassword}></input> <br/><br/>
    
    <button className="button" onClick={HandleLogin}>Login</button>
    </div>
    </div>
    </>
)
}