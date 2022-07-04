import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import { APP_NAME } from '../config';
import { signout, isAuth } from '../actions/auth';
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
  Row,
} from 'reactstrap';

import styles from '../static/css/Header.module.css';

import Search from './blog/Search';

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar container={true} className={styles.navbar}>
        <Row className="w-100">
          <div className={`col-sm-12 ${styles.divCol}`}>
            <Link href="/">
              {/* <NavLink className="font-weight-bold">{APP_NAME}</NavLink> */}
              <a className={styles.logoLink}>
                <img
                  className={styles.logo}
                  src="/static/images/telmo-academy.png"
                  alt={APP_NAME}
                />
              </a>
            </Link>
            {/* <NavbarToggler onClick={toggle} /> */}
            {/* <Collapse isOpen={isOpen} navbar> */}
            <ul className={styles.menuUl}>
              <li className={styles.listItem}>
                <Link href="https://app.telmo.academy/courses" passHref={true}>
                  <a className={styles.menuLink}>COURSES</a>
                </Link>
              </li>
              {!isAuth() && (
                <li className={styles.listItem}>
                  <Link href="https://app.telmo.academy/courses" passHref={true}>
                    <a className={styles.menuLink}>MEMBERSHIP</a>
                  </Link>
                </li>
              )}
              {!isAuth() && (
                <li className={styles.listItem}>
                  <Link href="https://app.telmo.academy/courses" passHref={true}>
                    <a className={styles.menuLink}>Old Website</a>
                  </Link>
                </li>
              )}
              <li className={styles.listItem}>
                <Link href="/blogs">
                  <a className={styles.menuLink}>BLOG</a>
                </Link>
              </li>
              {!isAuth() && (
                <li className={styles.listItem}>
                  <Link href="/blogs">
                    <a className={styles.menuLink}>Profile</a>
                  </Link>
                </li>
              )}
              {isAuth() && isAuth().role === 1 && (
                <li className={styles.listItem}>
                  <Link href="/admin">
                    <a className={styles.menuLink}>Dashboard</a>
                  </Link>
                </li>
              )}
              {isAuth() && isAuth().role === 1 && (
                <li className={styles.listItem}>
                  <Link href="/admin">
                    <a className={styles.menuLink}>Logout</a>
                  </Link>
                </li>
              )}
              {isAuth() && isAuth().role === 1 && (
                <li className={styles.listItem}>
                  <Link href="/user/crud/blog">
                    <a className={styles.menuLink}>Write a blog</a>
                  </Link>
                </li>
              )}
              {/* <React.Fragment>
                <NavItem>
                  <Link href="/blogs">
                    <NavLink>Blogs</NavLink>
                  </Link>
                </NavItem>
              </React.Fragment>

              {!isAuth() && (
                <React.Fragment>
                  <NavItem>
                    <Link href="/signin">
                      <NavLink>Signin</NavLink>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link href="/signup">
                      <NavLink>Signup</NavLink>
                    </Link>
                  </NavItem>
                </React.Fragment>
              )}

              {isAuth() && isAuth().role === 0 && (
                <NavItem>
                  <Link href="/user">
                    <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                  </Link>
                </NavItem>
              )}

              {isAuth() && isAuth().role === 1 && (
                <NavItem>
                  <Link href="/admin">
                    <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                  </Link>
                </NavItem>
              )}

              {isAuth() && (
                <NavItem>
                  <NavLink
                    style={{ cursor: 'pointer' }}
                    onClick={() => signout(() => Router.replace(`/signin`))}
                  >
                    Signout
                  </NavLink>
                </NavItem>
              )}

              <NavItem>
                <Link href="/user/crud/blog">
                  <NavLink className="btn btn-primary text-light">Write a blog</NavLink>
                </Link>
              </NavItem> */}
            </ul>
            {/* </Collapse> */}
          </div>
        </Row>
      </Navbar>
      <Search />
    </>
  );
};

export default Header;
