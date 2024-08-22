import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { TemplateMain } from '../components/templates';
import { Home } from '../pages';

const Navigation: React.FC = () => {
  return (
    <Routes>
      <Route element={<TemplateMain />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Navigation;
