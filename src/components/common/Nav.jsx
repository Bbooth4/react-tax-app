import React, { Component } from 'react';
import { NavItem, Row, Col, Dropdown } from 'react-materialize';
import SideNavv from './SideNav.jsx';

class Nav extends Component {
  render() {
    const topPadding = {
      'padding-top': '20px'
    }
    return (
      <Row>
        <div className='blue darken-2 white-text' style={topPadding}>
          <a href="#" id='nav-title1' className="nav-title brand-logo white-text">Late File Tax Return Specialists</a>
          <a href="#" id='nav-title2' className="nav-title brand-logo white-text">Late File Specialists</a>
          <nav className='blue darken-2 white-text' id='nav'>
            <SideNavv className='sidenav'/>
            <Dropdown className='nav-menu' trigger={
                <Col className='blue white-text nav-menu'>About Our Firm</Col>
              }>
              <NavItem className='blue white-text nav-menu'>###-###-####</NavItem>
              <NavItem className='blue white-text nav-menu'>email</NavItem>
              <NavItem className='blue white-text nav-menu'>address</NavItem>
            </Dropdown>
            <Col className='space'>a</Col>
            <Dropdown className='nav-menu' trigger={
                <Col className='blue white-text nav-menu'>Available Tax Services</Col>
              }>
              <NavItem className='blue white-text nav-menu'>###-###-####</NavItem>
              <NavItem className='blue white-text nav-menu'>email</NavItem>
              <NavItem className='blue white-text nav-menu'>address</NavItem>
            </Dropdown>
            <Col className='space'>a</Col>
            <Dropdown className='nav-menu' trigger={
                <Col className='blue white-text nav-menu'>Business / Individuals</Col>
              }>
              <NavItem className='blue white-text nav-menu'>###-###-####</NavItem>
              <NavItem className='blue white-text nav-menu'>email</NavItem>
              <NavItem className='blue white-text nav-menu'>address</NavItem>
            </Dropdown>
            <Col className='space'>a</Col>
            <Dropdown className='nav-menu' trigger={
                <Col className='blue white-text nav-menu'>Resources</Col>
              }>
              <NavItem className='blue white-text nav-menu'>###-###-####</NavItem>
              <NavItem className='blue white-text nav-menu'>email</NavItem>
              <NavItem className='blue white-text nav-menu'>address</NavItem>
            </Dropdown>
            <Col className='space'>a</Col>
            <Dropdown className='nav-menu' trigger={
                <Col className='blue white-text nav-menu'>Get In Touch With Us</Col>
              }>
              <NavItem className='blue white-text nav-menu'>###-###-####</NavItem>
              <NavItem className='blue white-text nav-menu'>email</NavItem>
              <NavItem className='blue white-text nav-menu'>address</NavItem>
            </Dropdown>
          </nav>
        </div>
      </Row>
    )
  }
}

export default Nav;
