import React from 'react';
import { useSelector } from 'react-redux';
import Campaign from './components/Campaign';
import Freebie from './components/Freebie';
import Home from './components/Home';
import SignUp from './components/SignUp';

const App = () => {

  const salma = useSelector((state) => state.routing)

  return (
    <>
      <Home />
      {salma.showCampaign && <Campaign />}
      {salma.showSignUp && <SignUp />}
      {salma.showFreebie && <Freebie />}
    </>
  );
};

export default App;
