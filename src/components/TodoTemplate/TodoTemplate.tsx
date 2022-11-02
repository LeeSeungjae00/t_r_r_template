// TodoTemplate.tsx
import React from 'react';
import './TodoTemplate.scss';
import Header from 'components/Header';
import TodoContents from 'components/TodoContents';

const TodoTemplate = (): JSX.Element => {
  return (
    <div className="TodoTemplate">
      <Header></Header>
      <TodoContents></TodoContents>
    </div>
  );
};

export default TodoTemplate;
