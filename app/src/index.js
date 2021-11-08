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

setInterval(Timer.tick, 3000);


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <NameForm />
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
