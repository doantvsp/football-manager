import React, { Component } from 'react';
import {Link } from "react-router-dom";

const MenuList = [
  {
    to: '/',
    label: 'Home'
  },
  {
    to: '/players',
    label: 'Players'
  }
];
class Menus extends Component {
  render() {
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <p className="navbar-brand">Football Management</p>
          </div>
          <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav">
              {this.showMenus(MenuList)}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  showMenus = (MenuList) => {
    var result =  null;
    if(MenuList.length > 0){
      result = MenuList.map((menu,index) => {
        return (
          <li  key={index} ><Link to={menu.to} >{menu.label}</Link></li>
        );
      });
    }
    return result;
  }
  
}

export default Menus;
