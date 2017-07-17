import React, { Component } from 'react';
import { SideNav, SideNavItem, Button } from 'react-materialize';

class SideNavv extends Component {
  render() {
    return (
      <SideNav
        trigger={<Button id='open-sidebar' icon='menu'></Button>}
        options={{ closeOnClick: true }}
        >
        <SideNavItem userView
          user={{
            background: 'public/concert.jpg',
            image: 'public/mic.jpg',
            name: 'John Doe',
            email: 'example@gmail.com'
          }}
        />
        <SideNavItem waves href='#!' icon='info_outline'>About Our Firm</SideNavItem>
        <SideNavItem waves href='#!' icon='description'>Available Tax Services</SideNavItem>
        <SideNavItem waves href='#!' icon='perm_identity'>Business / Individuals</SideNavItem>
        <SideNavItem waves href='#!' icon='language'>Resources</SideNavItem>
        <SideNavItem waves href='#!' icon='contacts'>Get In Touch With Us</SideNavItem>
      </SideNav>
    )
  }
}

export default SideNavv;
