import {NavLink} from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {

    // Handle toggle of menu visibility
    const loadMenu = () => {
        document.querySelector('ul').classList.toggle('active');
    };

    // Handle closing the menu when a menu item is clicked
    const closeMenu = () => {
        document.querySelector('ul').classList.remove('active');
    };

    return (
        <>
            <nav className='navbar'>
                <NavLink to="/"><img src={logo} alt='logo'/></NavLink>
                <div className='navbar-menu'>
                    <button className="hamburger" onClick={loadMenu}>☰</button>
                    <ul>
                        <li onClick={closeMenu}>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li onClick={closeMenu}>
                            <NavLink to="/education">Education</NavLink>
                        </li>
                        <li onClick={closeMenu}>
                            <NavLink to="/experience">Experience</NavLink>
                        </li>
                        <li onClick={closeMenu}>
                            <NavLink to="/industry">Industry</NavLink>
                        </li>
                        <li onClick={closeMenu}>
                            <NavLink to="/certificate">Certificate</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
export default Header;