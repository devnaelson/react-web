import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/compApp/App';
import reportWebVitals from './reportWebVitals';
import Dust from './components/compApp/Dust';
import Garage from './components/props/Props';
import Football from './components/events/Event';
import Timer from './components/timer/timer';
import Form from './components/forms/form';


/*
Verify that the components inside are following some of the recommended practices and warn you if not in the console.
Verify the deprecated methods are not being used, and if they're used strict mode will warn you in the console.
Help you prevent some side effects by identifying potential risks.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
*/

setInterval(Timer.tick, 3000);


ReactDOM.render(
  <React.StrictMode>
    <Form />
    <Football />
    <Garage />
    <App />
    <Timer.Clock />
    <Dust.element />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
