import { useState, useEffect } from "react";

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = (shouldListen = true, subscriber = null) => {
  const setState = useState(globalState)[1];
  const [flag, setFlag] = useState(-1);

  const dispatch = (actionIdentifier, payload) => {
    const curState = actions[actionIdentifier](globalState, payload);
    globalState = {
      ...globalState,
      ...curState,
    };
 
    for (const listenerObj of listeners) {
      const { listener, subscriber } = listenerObj;
      if (subscriber) {
        if (flag === 1) {
          listener(globalState);
          setFlag(0);
        }
      } else {
        listener(globalState);
      }
    }
  };

  useEffect(() => {
    if (shouldListen) {
      listeners.push({ listener: setState, subscriber: subscriber });
    }

    return () => {
      if (shouldListen) {
        listeners = listeners.filter((obj) => obj.listener !== setState);
      }
    };
  }, [setState, shouldListen, subscriber]);

  useEffect(() => {
     
    if (subscriber) {
      if (flag === -1) {
        setFlag(0);
      } else if(flag === 0) {
        setFlag(1);
      }
    }
  }, [globalState[subscriber], flag, subscriber]);

  return [globalState, dispatch];
};

export const initStore = (userActions, userState) => {
  if (userState) {
    globalState = {
      ...globalState,
      ...userState,
    };
  }
  actions = {
    ...actions,
    ...userActions,
  };
};
