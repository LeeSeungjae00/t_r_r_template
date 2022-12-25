import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_FORM_TEST, ROUTE_HOME, ROUTE_REACT_QUERY_TEST } from 'router/Router';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <Link to={ROUTE_HOME}>HOME</Link>
      <Link to={ROUTE_FORM_TEST}>FORM TEST</Link>
      <Link to={ROUTE_REACT_QUERY_TEST}>QUERY TEST</Link>
    </header>
  );
}
