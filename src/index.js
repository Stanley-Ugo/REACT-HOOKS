import React from 'react';
import ReactDOM from 'react-dom';
import ReducerComp from './useReducer'


ReactDOM.render(
  <React.StrictMode>
    <ReducerComp initialCount={0}/>
  </React.StrictMode>,
  document.getElementById('root')
);

