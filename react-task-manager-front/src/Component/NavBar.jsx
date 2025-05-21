import { NavLink } from 'react-router-dom';
import '../App.css'; 

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink className="nav-link" to="/">
                Lista Task
            </NavLink>
            <NavLink className="nav-link" to="/add">
                Aggiungi Task
            </NavLink>
        </nav>
    );
}

export default Navbar;
