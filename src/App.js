import React from 'react';
import { useSelector } from 'react-redux';
import Campaign from './components/Campaign';
import Freebie from './components/Freebie';
import Home from './components/Home';
import SignUp from './components/SignUp';

const App = () => {

  const routingState = useSelector((state) => state.routing)

  return (
    <>
      {routingState.showHome && <Home />}
      {routingState.showCampaign && <Campaign />}
      {routingState.showSignUp && <SignUp />}
      {routingState.showFreebie && <Freebie />}
    </>
  );
};

export default App;
