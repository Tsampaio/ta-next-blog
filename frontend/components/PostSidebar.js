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

import styles from './Sidebar.module.css';

import Search from './blog/Search';

const Sidebar = ({ categories, tags }) => {
  const showAllCategories = () => {
    return categories?.map((c, i) => (
      <Link href={`/categories/${c.slug}`} key={i}>
        <a className={`mr-2`}>{c.name.toUpperCase()}</a>
      </Link>
    ));
  };

  const showAllTags = () => {
    return tags?.map((t, i) => (
      <Link href={`/tags/${t.slug}`} key={i}>
        <a className={`mr-2`}>{t.name.toUpperCase()}</a>
      </Link>
    ));
  };

  return (
    <>
      <section className={`p-4 cardBorder ${styles.sideBar}`}>
        <div className={`${styles.categoriesNav}`}>
          <Search />
          <hr />
          <h6 className="mb-2">Categories: </h6>
          <div className="mb-2">{showAllCategories()}</div>
          <hr />
          <h6 className="mb-2">Tags: </h6>
          <div className="mb-2">{showAllTags()}</div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
