
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import ErrorComponent from "./ErrorComponent"
import Footer from "./Footer"
import HeaderComponent from "./HeaderComponent"
import LoginComponent from "./LoginComponent"
import Logout from "./Logout"
import Todolist from "./Todolist"
import WelcomeComponent from "./WelcomeComponent"
import AuthProvider, {useAuth} from './Security/AuthContext'
import DescriptionComponent from './DescriptionDateComponent'


function AuthenticateRoute({children})
{
    const authContext=useAuth()
    if(authContext.isAuthenticated)
    {
    return children
    }
    return <Navigate to="/" />
}
export default function Todoapp() 
{
return(
    <>
    <AuthProvider>
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>
    <Route path='/' element={<LoginComponent/>}></Route>
        

        <Route path='/login' element={<LoginComponent/>}></Route>
       

        <Route path='/welcome/:name' element={
          <AuthenticateRoute><WelcomeComponent /></AuthenticateRoute> 
            } >  </Route>
        
        <Route path='*' element={<ErrorComponent/>} >  </Route>
        

        <Route path='/todo-list' element={
          <AuthenticateRoute><Todolist/> </AuthenticateRoute> 
            } >  </Route>
        

        <Route path='/logoutuser/:name' element={<Logout/>} >  </Route>

        <Route path='/todo/:id' element={
            <AuthenticateRoute><DescriptionComponent/></AuthenticateRoute> 
            } >  </Route>
      
    </Routes>
    <Footer/>
    </BrowserRouter>
    </AuthProvider>
    </>
)
}

 






    //   function SuccessMessageComponent()
    //   {
    //     if(showSuccessLogin)
    //     {
    //         return(
    //             <h2>User Verified</h2>
    //         )
    //     }
    //     return null;
    //   }
    //   function ErrorMessageComponent()
    //   {
    //      if(showErrorLogin)
    //      {
    //         return(
    //             <h2>Check UserName And Password</h2>
    //         )
    //      }
    //      return null;
    //   }























