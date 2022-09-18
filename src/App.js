import React from 'react';
import Campaign from './components/Campaign';
import Freebie from './components/Freebie';
import Home from './components/Home';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <>
      <Home />
      <Campaign />
      <SignUp />
      <Freebie />
    </>
  );
};

export default App;
