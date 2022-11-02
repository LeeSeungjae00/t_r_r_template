import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_FORM_TEST, ROUTE_HOME } from 'router/Router';
import './Header.scss';

export default function Header() {
  return (
    <header>
      <Link to={ROUTE_HOME}>HOME</Link>
      <Link to={ROUTE_FORM_TEST}>FORM TEST</Link>
    </header>
  );
}
