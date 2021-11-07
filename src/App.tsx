import Router from '@/Router';
import GlobalStyle from '@/styles/GlobalStyle';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;
