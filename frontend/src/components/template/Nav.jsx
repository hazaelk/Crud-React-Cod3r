import './Nav.css';
import NavItem from './NavItem';
import React from 'react';
// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem url="" icon="home" title="Início"/>
            <NavItem url="users" icon="users" title="Usuários"/>
            
        </nav>
    </aside>