// TodoTemplate.tsx
import React from 'react';
import './TodoTemplate.scss';
import Header from 'components/Header';
import RouterConfig from 'router/RouterConfig';

const TodoTemplate = (): JSX.Element => {
  return (
    <div className="TodoTemplate">
      <Header></Header>
      <div className="TodoTemplate-Contents">
        <RouterConfig></RouterConfig>
      </div>
    </div>
  );
};

export default TodoTemplate;
