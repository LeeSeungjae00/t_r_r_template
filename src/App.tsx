import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTemplate from 'components/TodoTemplate/TodoTemplate';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Router>
          <TodoTemplate></TodoTemplate>
        </Router>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
