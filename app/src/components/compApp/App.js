import logo from './logo.svg';
import './App.css';

const name = "Naelson";
const things = {
  wds: ['A', 'B', 'C'],
  action: function () {
    return this.wds[2];
  },


}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <li>{name}</li>
          <li>{things.action()}</li>
        </ul>
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" > Learn React</a>
      </header>
    </div>
  );
}

export default App;
