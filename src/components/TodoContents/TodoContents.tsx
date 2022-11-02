import TodoInput from 'components/TodoInput';
import TodoList from 'components/TodoList';
import TodoTitle from 'components/TodoTitle';
import React from 'react';
import './TodoContents.scss';

export default function TodoContents() {
  return (
    <div className="TodoTemplate-Contents">
      <TodoTitle />
      <TodoList />
      <TodoInput />
    </div>
  );
}
