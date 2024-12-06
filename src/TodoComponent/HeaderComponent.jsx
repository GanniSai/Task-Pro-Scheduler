import {Link} from 'react-router-dom'
import { useAuth } from './Security/AuthContext';
//import { useContext } from 'react';


function LogoutComponent()
{
   useAuth().setIsAuthenticated(false)
}
export default function HeaderComponent() 
{
   // const authContext=useContext(AuthContext)
    const username=useAuth()
    const isAuthenticated=username.isAuthenticated

  return (
    <header className>
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg">
            <a
              className="navbar-brand ms-15 fs-10 fw-bold text-black"
              href="https://www.google.com"
            >
              Clevera
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item fs-5">
                    {isAuthenticated &&
                  <Link className="nav-link" to="/welcome/GanniSai">Home</Link>}
                </li>
                <li className="nav-item fs-5">
                    {isAuthenticated &&
                  <Link className="nav-link" to="/todo-list">Todos</Link>}
                </li>
              </ul>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item fs-5">
                {!isAuthenticated &&
                <Link className="nav-link" to="/login">Login</Link>}
              </li>
              <li className="nav-item fs-5">
                {isAuthenticated &&
                <Link className="nav-link" to="/logoutuser/GanniSai" onClick={LogoutComponent}>Logout</Link>}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}