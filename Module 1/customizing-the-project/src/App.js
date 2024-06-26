import React from 'react';
import Intro1 from './components/Intro1.js';
import Intro2 from './components/Intro2.js';
import Intro3 from './components/Intro3.js';
import Nav from './components/Nav.js';
import Promo from './components/Promo.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <Nav />,
      <Promo />,
      <Intro1 />,
      <Intro2 />,
      <Intro3 />,
      <Footer />
    </div>
  );
};

export default App;
