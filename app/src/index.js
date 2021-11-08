import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/compApp/App';
import reportWebVitals from './reportWebVitals';
import Dust from './components/compApp/Dust';
import Garage from './components/props/Props';
import Football from './components/events/Event';
import Timer from './components/timer/timer';

/*
Verify that the components inside are following some of the recommended practices and warn you if not in the console.
Verify the deprecated methods are not being used, and if they're used strict mode will warn you in the console.
Help you prevent some side effects by identifying potential risks.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
*/

setInterval(Timer, 3000);


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>Show {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Football/>
    <Garage />
    <App />
    <Clock />
    <Dust.element />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
