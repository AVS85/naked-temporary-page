import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navigation from './navigation';

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}
