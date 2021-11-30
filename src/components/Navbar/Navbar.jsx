import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';


/*let s = {
  'nav': 'Navbar_nav__1S5IF',
  'item': 'Navbar_item__11TuI'
}*/



const Navbar = () => {
  return (
    <nav className={s.nav}>
    <div className={s.item}><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></div>
    <div className={s.item}><NavLink to="/dialogs" activeClassName={s.activeLink}>Message</NavLink></div>
    <div className={s.item}><NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink></div>
    <div className={s.item}><a href="/news">News</a></div>
    <div className={s.item}><a href="/music">Music</a></div>
    <div className={s.item}><a href="/settings">Settings</a></div>
    </nav>
  )
}

export default Navbar;