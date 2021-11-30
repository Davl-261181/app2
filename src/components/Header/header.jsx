import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './header.module.css';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1e4nWR0Rwj9Wd9x4dx-XQLtTETqhB0YylIw&usqp=CAU'/>

        <div className={s.loginBlock}>
          { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
        </div>
      </header>
}

export default Header;
