import React, { useState, useContext } from 'react';
import { Link } from 'react';
import icon from './icon/palmtreeicon.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import UserContext from '../components/UserContext';


function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(UserContext);
  //const loggedin = args.loggedin;
  console.log('this is args', args);
  
  
  


  const toggle = () => setIsOpen(!isOpen);


  return (
    <div>
      <Navbar className="navbar" {...args} expand="md">
        <NavbarBrand className="navbar-brand" href="/">
        <img
        alt="Palm Tree Icon"
        src={ icon }
        style={{
          height: 40,
          width: 40
        }}
      />Bad Bank</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
                <NavLink href="#/">Home</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="#/createaccount">Create Account</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem><NavLink href="#/deposit">Deposit</NavLink></DropdownItem>
                <DropdownItem><NavLink href="#/withdraw">Withdraw</NavLink></DropdownItem>

              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
                <NavLink href="#/alldata">All Data</NavLink>
            </NavItem>
          </Nav>

        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;