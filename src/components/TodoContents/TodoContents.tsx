import TodoInput from 'components/TodoInput';
import TodoList from 'components/TodoList';
import TodoTitle from 'components/TodoTitle';
import React from 'react';

export default function TodoContents() {
  return (
    <>
      <TodoTitle />
      <TodoList />
      <TodoInput />
    </>
  );
}
