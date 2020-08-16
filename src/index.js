import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';

const AppComponent = () => {
  return (
    <div>
      <h1>React</h1>
      <App />
    </div>
  );
};

ReactDOM.render(<AppComponent />, document.querySelector('#root'));
