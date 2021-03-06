/*
 # Navbar.js
 # Bootstrap Navbar Component
 */

/*
 # Module Dependencies
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.less';


/*
 # Component
 */

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixedTop: PropTypes.bool,
  fixedBottom: PropTypes.bool,
};

const defaultProps = {
  className: '',
  light: false,
  dark: false,
  fixedTop: false,
  fixedBottom: false,
};

export default function Navbar({
  children,
  light,
  dark,
  fixedTop,
  fixedBottom,
  className,
}) {
  const classes = ['navbar'];
  if (light) classes.push('navbar-light bg-light');
  if (dark) classes.push('navbar-dark bg-dark');
  if (fixedTop) classes.push('fixed-top');
  if (fixedBottom) classes.push('fixed-bottom');
  if (className && typeof className === 'string') classes.push(className);

  return (
    <nav className={classes.join(' ')}>
      { children }
    </nav>
  )
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
