import { initStore } from "./use-store";

const ConfigureNumbers = () => {
  initStore({
    'ADD': (prevState, payload) => { 
      return  { number: prevState.number + payload }
    }, 
    'SUBTRACT': (prevState, payload) => {
      return  { number: prevState.number - payload }
    } 
  }, {number: 0});
};

export default ConfigureNumbers;