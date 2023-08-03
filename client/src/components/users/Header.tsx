import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../sass/header.scss';
import { UserContext } from '../../contexts/UserContext';

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { currentUser } = useContext(UserContext);

  return (
    <header id='header'>
      <div className="wrapper container-lg">
        <div className="logo">
          <Link to='' className='nav-link'>Logo</Link>
        </div>
        <nav className={showMenu ? `active` : ''}>
          <ul>
            <li onClick={() => setShowMenu(false)} className="nav-item">
              <NavLink className={({isActive, isPending}) => isPending ? 'nav-link' : isActive ? 'nav-link active' : 'nav-link'} to="/">Home</NavLink>
            </li>
            <li onClick={() => setShowMenu(false)} className="nav-item">
              <NavLink className={({isActive, isPending}) => isPending ? 'nav-link' : isActive ? 'nav-link active' : 'nav-link'} to="/about">About</NavLink>
            </li>
            <li onClick={() => setShowMenu(false)} className="nav-item">
              <NavLink className={({isActive, isPending}) => isPending ? 'nav-link' : isActive ? 'nav-link active' : 'nav-link'} to="/services">Services</NavLink>
            </li>
            <li onClick={() => setShowMenu(false)} className="nav-item">
              <NavLink className={({isActive, isPending}) => isPending ? 'nav-link' : isActive ? 'nav-link active' : 'nav-link'} to="/booking">Booking</NavLink>
            </li>
            <li onClick={() => setShowMenu(false)} className="nav-item">
              <NavLink className={({isActive, isPending}) => isPending ? 'nav-link' : isActive ? 'nav-link active' : 'nav-link'} to="/contact">Contact</NavLink>
            </li>
            { !currentUser && <li onClick={() => setShowMenu(false)} className={`nav-item ${ currentUser ? 'mobile-login' : '' }`}>
              <NavLink className={({isActive, isPending}) => isPending ? 'nav-link' : isActive ? 'nav-link active' : 'nav-link'} to="/login">Login</NavLink>
            </li> }
          </ul>
        </nav>
        <div className="menu" onClick={() => setShowMenu(!showMenu)} >
          <i className={`fa-solid ${showMenu ? 'fa-xmark' : 'fa-bars'}`}></i>
        </div>
      </div>
    </header>
  )
}

export default Header;