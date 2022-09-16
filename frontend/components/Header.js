import React from 'react';
import { useState, useEffect } from 'react';
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
  const [pageLoaded, setPageLoaded] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!pageLoaded) {
      setPageLoaded(true);
    }
  }, []);

  return (
    <>
      <Navbar container={true} className={styles.navbar}>
        <Row style={{ flex: 1 }}>
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
              {pageLoaded && (
                <li className={styles.listItem}>
                  <Link href="https://app.telmo.academy/courses" passHref={true}>
                    <a className={styles.menuLink}>MEMBERSHIP</a>
                  </Link>
                </li>
              )}
              {pageLoaded && isAuth()?.role !== 1 && (
                <li className={styles.listItem}>
                  <Link href="https://app.telmo.academy/courses" passHref={true}>
                    <a className={styles.menuLink}>Old Website</a>
                  </Link>
                </li>
              )}
              {pageLoaded && (
                <li className={styles.listItem}>
                  <Link href="/">
                    <a className={styles.menuLink}>BLOG</a>
                  </Link>
                </li>
              )}
              {pageLoaded && !isAuth() && (
                <li className={styles.listItem}>
                  <Link href="/blogs">
                    <a className={styles.menuLink}>LOGIN</a>
                  </Link>
                </li>
              )}
              {pageLoaded && isAuth() && isAuth().role === 1 && (
                <li className={styles.listItem}>
                  <Link href="/admin">
                    <a className={styles.menuLink}>Dashboard</a>
                  </Link>
                </li>
              )}

              {pageLoaded && isAuth() && isAuth().role === 1 && (
                <li className={styles.listItem}>
                  <Link href="/admin">
                    <a className={styles.menuLink}>Logout</a>
                  </Link>
                </li>
              )}
              {pageLoaded && isAuth() && isAuth().role === 1 && (
                <li className={styles.listItem}>
                  <Link href="/user/crud/blog">
                    <a className={styles.menuLink}>Write a blog</a>
                  </Link>
                </li>
              )}
            </ul>
            <div className={`navbar-dark bg-dark ${styles.mobileBtn}`}>
              {/* <a className="navbar-brand" href="#">
                Navbar
              </a> */}
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              {/* <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Homies <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">
                      Disabled
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </Row>
      </Navbar>
      <div className={`collapse navbar-collapse ${styles.mobileMenu}`} id="navbarNav">
        <ul className="navbar-nav py-2">
          <li className={`${styles.mobileListItem} nav-item active py-1 border-bottom border-dark`}>
            <Link href="https://app.telmo.academy/courses" passHref={true}>
              <a className={`${styles.mobileLink} d-block`}>COURSES</a>
            </Link>
          </li>
          {pageLoaded && (
            <li className={`${styles.mobileListItem} nav-item py-1 border-bottom border-dark`}>
              <Link href="https://app.telmo.academy/courses" passHref={true}>
                <a className={`${styles.mobileLink} d-block`}>MEMBERSHIP</a>
              </Link>
            </li>
          )}
          {pageLoaded && isAuth()?.role !== 1 && (
            <li className={`${styles.mobileListItem} nav-item py-1 border-bottom border-dark`}>
              <Link href="https://app.telmo.academy/courses" passHref={true}>
                <a className={`${styles.mobileLink} d-block`}>OLD WEBSITE</a>
              </Link>
            </li>
          )}
          {pageLoaded && (
            <li className={`${styles.mobileListItem} nav-item py-1 border-bottom border-dark`}>
              <Link href="/">
                <a className={styles.mobileLink}>BLOG</a>
              </Link>
            </li>
          )}
          {pageLoaded && !isAuth() && (
            <li className={`${styles.mobileListItem} nav-item py-1`}>
              <Link href="/blogs">
                <a className={`${styles.mobileLink} d-block`}>PROFILE</a>
              </Link>
            </li>
          )}
          {pageLoaded && isAuth() && isAuth().role === 1 && (
            <li className={`${styles.mobileListItem} nav-item py-2`}>
              <Link href="/admin">
                <a className={`${styles.mobileLink} d-block`}>Dashboard</a>
              </Link>
            </li>
          )}

          {pageLoaded && isAuth() && isAuth().role === 1 && (
            <li className={`${styles.mobileListItem} nav-item py-2`}>
              <Link href="/admin">
                <a className={`${styles.mobileLink} d-block`}>Logout</a>
              </Link>
            </li>
          )}
          {pageLoaded && isAuth() && isAuth().role === 1 && (
            <li className={`${styles.mobileListItem} py-2`}>
              <Link href="/user/crud/blog">
                <a className={`${styles.mobileLink} d-block`}>Write a blog</a>
              </Link>
            </li>
          )}
        </ul>
      </div>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav> */}
    </>
  );
};

export default Header;
