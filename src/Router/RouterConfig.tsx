import FormTest from 'components/FormTest/FormTest';
import TodoContents from 'components/TodoContents';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTE_FORM_TEST, ROUTE_HOME } from './Router';

export default function RouterConfig() {
  return (
    <Routes>
      <Route path={ROUTE_HOME} element={<TodoContents></TodoContents>}></Route>
      <Route path={ROUTE_FORM_TEST} element={<FormTest></FormTest>}></Route>
    </Routes>
  );
}
