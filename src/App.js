import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import AppRoutes from './AppRoutes';

const App = () => {
  return (
    <Router basename='/it-company-web'>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
};

export default App;
