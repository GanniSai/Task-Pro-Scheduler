// import axios from 'axios'
import { useState } from 'react'
import {useParams, Link} from 'react-router-dom'
// import WelcomeBean from './TodoApi/WelcomepageService'
import { WelcomeUserBean } from './TodoApi/FrontendService'
export default function WelcomeComponent()
{
    const[message,setMessage]=useState(null)
    
function Backendrestapi()
{
    // WelcomeBean()
    // axios.get("http://localhost:2020/hello-world")
    // .then(
    //     (response)=>successResponse(response)
    // )
    // .catch(
    //     (error)=>errorResponse(error)
    // )
    // .finally(
    //     console.log(`cleanup`)
    // )
    WelcomeUserBean(`GanniSai`)
    .then(
        (response)=>successResponse(response)
    )
    .catch(
        (error)=>errorResponse(error)
    )
    .finally(
        console.log(`cleanup`)
    )

    function successResponse(response)
    {
       console.log(response)
       setMessage(response.data.message)
       
    }

    function errorResponse(error)
    {
       console.log(error)
    }



}

    const param=useParams()
    return(
        <>
        <div className="welcomePage">
        <h2 > Welcome User </h2>
         <h1 style={{color:"green"}}> {param.name} </h1>
        <div>Manage Todos : <Link to = "/todo-list">Go here</Link> </div>
        <br/>
        <div>
            <button className="userDetails" onClick={Backendrestapi}>UserDetails</button>
        </div>
        <div className='text-info'>{message}</div>
        </div>
        </>
    )
}
