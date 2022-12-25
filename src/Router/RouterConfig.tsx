import FormTest from 'components/FormTest/FormTest';
import QueryTest from 'components/QueryTest/QueryTest';
import TodoContents from 'components/TodoContents';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTE_FORM_TEST, ROUTE_HOME, ROUTE_REACT_QUERY_TEST } from './Router';

export default function RouterConfig() {
  return (
    <Routes>
      <Route path={ROUTE_HOME} element={<TodoContents></TodoContents>}></Route>
      <Route path={ROUTE_FORM_TEST} element={<FormTest></FormTest>}></Route>
      <Route path={ROUTE_REACT_QUERY_TEST} element={<QueryTest></QueryTest>}></Route>
    </Routes>
  );
}
