import React from 'react';
import style from './App.css';

const App = () => {
  return (
    <div className={style.app}>
      <h1>React + Webpack@4 boilerplate</h1>
      <p>This boilerplate was built with:</p>
      <ul>
        <li>React</li>
        <li>ReactDOM</li>
        <li>Wepack 4</li>
      </ul>
    </div>
  );
};

export default App;
