import React from 'react';
import TodoInput from 'components/TodoInput';
import TodoList from 'components/TodoList';
import TodoTitle from 'components/TodoTitle';

export default function TodoContents() {
  return (
    <>
      <TodoTitle />
      <TodoList />
      <TodoInput />
    </>
  );
}
