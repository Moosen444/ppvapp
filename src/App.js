import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://pla.s6img.com/society6/img/DSWV1LDjjsLub792k2wm_83dUcU/w_700/prints/~artwork/s6-0032/a/15280519_7819380/~~/wwe-ring-logo-prints.jpg" className="App-logo" alt="logo" />
          <h1 className="App-title">Place your bets</h1>
        </header>
        <p className="App-intro"> For fun or for more!
        </p>
        <span>
         <form>
          <label>
           Name:
            <input type="text" name="name" />
          </label>
         </form>
         <button>Winner</button>
        </span>
        <span>
         <form>
          <label>
           Name:
            <input type="text" name="name" />
          </label>
         </form>
         <button>Winner</button>
        </span>
        <span>
         <form>
          <label>
           Name:
            <input type="text" name="name" />
          </label>
         </form>
         <button>Winner</button>
        </span>
        <span>
         <form>
          <label>
           Name:
            <input type="text" name="name" />
          </label>
         </form>
         <button>Winner</button>
        </span>
      </div>
    );
  }
}

export default App;
