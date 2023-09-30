import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
  return (
    <Menu height={100}>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/sites">
        Blocked Sites
      </a>
      <a className="menu-item" href="/stats">
        Statistics
      </a>
      <a className="menu-item" href="/friends">
        Friends
      </a>
    </Menu>
  );
};