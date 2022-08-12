import { useState, useEffect } from 'react';

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    const curState = actions[actionIdentifier](globalState, payload);
    globalState = {
      ...globalState,
      ...curState
    };

    for(let listener of listeners){ 
      listener(globalState);
    }
  };

  useEffect(() => { 
    if(shouldListen){
      listeners.push(setState);
    }


    return () => {
      if(shouldListen){
        listeners = listeners.filter(listener => listener !== setState);
      }

    }
  }, [setState, shouldListen]);

  return [globalState, dispatch];
  
};

export const initStore = (userActions, userState) => {
  if(userState){
    globalState = {
      ...globalState,
      ...userState
    };
  }
  actions = {
    ...actions, 
    ...userActions
  }
}; 