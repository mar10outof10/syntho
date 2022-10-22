import React from 'react';
import UserInterface from 'components/UserInterface/UserInterface';
import SynthBeatContainer from 'components/SynthBeatContainer/SynthBeatContainer';

const SynthoMain = () => {
  return (
    <div className="synthoMain">
      <UserInterface />
      <SynthBeatContainer />
    </div>
  )
}

export default SynthoMain