import {useParams} from 'react-router-dom'
export default function Logout()
{
  const param=useParams()
  return(
    
     <h2 className="logoutbutton">
     Thank You User : {param.name}
     <br/>
     Come Again !!
     </h2>
    
  )
}