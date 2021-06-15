import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
} from 'reactstrap';

import './MainNavigation.css';

const MainNavigation = () => {
  const history = useHistory();
  const testing = e => {
    history.push(`/students-input/${e}`);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Navbar className="px-5 py-3 justify-content-between" expand="md">
        <NavbarBrand className="logo">
          <Link to="/students-input">CupeX first app</Link>
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />

        <Collapse className="flex-grow-0" isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="px-2">
              <Link to="/students-input/all-students">Students</Link>
            </NavItem>
            <NavItem className="px-2">
              <Link to="/students-input/all-subjects">Subjects</Link>
            </NavItem>
            <NavItem className="px-2">
              <Link to="/students-input/all-professors">Professors</Link>
            </NavItem>
            <li>
              <select
                className="sort-btn"
                onChange={e => testing(e.target.value)}
              >
                <option value="add">Add new?</option>
                <option value="add-new-student">Add new student</option>
                <option value="add-new-professor">Add new profesor</option>
                <option value="add-new-subject">Add new subject</option>
              </select>
            </li>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default MainNavigation;
