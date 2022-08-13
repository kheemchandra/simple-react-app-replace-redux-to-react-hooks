import React from 'react';

import { useStore } from '../../hook-store/use-store';
import './Numbers.css';

const Numbers = props => { 
  const [state, dispatch] = useStore(true, 'number');

  return <div className='numbers'>
    <p>Only there to proof, that you can have multiple state slices.</p>
    <p>Counter: {state.number}</p>
    <div className='numbers-controls'>
      <button onClick={() => {dispatch('ADD', 1)}}>Add 1</button>
      <button onClick={() => {dispatch('ADD', 5)}}>Add 5</button>
      <button onClick={() => {dispatch('SUBTRACT', 1)}}>Subtract 1</button>
      <button onClick={() => {dispatch('SUBTRACT', 5)}}>Subtract 5</button>
    </div>
  </div>
};

export default Numbers;