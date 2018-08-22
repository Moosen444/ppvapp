import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 constructor(props){
   super(props);
   this.state = {
     winner1 : 0,
     winner2 : 0,
     winner3 : 0,
     winner4 : 0,
   };
   this.winner2 = this.incrementwinner2.bind(this);
   this.winner3 = this.incrementwinner3.bind(this);
   this.winner4 = this.incrementwinner4.bind(this);
   this.reset = this.reset.bind(this);
 };
  incrementwinner1 = () => {
    this.setState(
      { winner1 : this.state.winner1 + 1, }
    );
  }
  incrementwinner2 = () => {
    this.setState(
      { winner2 : this.state.winner2 + 1, }
    );
  }
  incrementwinner3 = () => {
    this.setState(
      { winner3 : this.state.winner3 + 1, }
    );
  }
  incrementwinner4 = () => {
    this.setState(
      { winner4 : this.state.winner4 + 1, }
    );
  }
  reset(){
    this.setState({
      winner1 : 0,
      winner2 : 0,
      winner3 : 0,
      winner4 : 0,
    });
  }
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
          <label>
           Name:
            <input type="text" name="name" />
          </label>
         <button onClick={this.incrementwinner1}>Winner {this.state.winner1}</button>
        </span>
        <span>
          <label>
           Name:
            <input type="text" name="name" />
          </label>
         <button onClick={this.incrementwinner2}>Winner {this.state.winner2}</button>
        </span>
        <span>
          <label>
           Name:
            <input type="text" name="name" />
          </label>
         <button onClick={this.incrementwinner3}>Winner {this.state.winner3}</button>
        </span>
        <span>
          <label>
           Name:
            <input type="text" name="name" />
          </label>
         <button onClick={this.incrementwinner4}>Winner {this.state.winner4}</button>
        </span>
        <div>
        <button onClick={this.reset}>Reset</button>
        </div>
        <p>
         Match 1
        </p>
        <span>
         <form>
          <label>
           Opponent 1:
            <input type="text" name="name" />
          </label>
          <button>Winner </button>
          </form>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
        </span>
        <p>
        v.s.
        </p>
        <span>
         <form>
          <label>
           Opponent 2:
            <input type="text" name="name" />
          </label>
          <button>Winner </button>
         </form>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
        </span>
        <p>
         Match 2
        </p>
        <span>
         <form>
          <label>
           Opponent 1:
            <input type="text" name="name" />
          </label>
         </form>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
        </span>
        <p>
        v.s.
        </p>
        <span>
         <form>
          <label>
           Opponent 2:
            <input type="text" name="name" />
          </label>
         </form>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
        </span>
        <p>
         Match 3
        </p>
        <span>
         <form>
          <label>
           Opponent 1:
            <input type="text" name="name" />
          </label>
         </form>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
        </span>
        <p>
        v.s.
        </p>
        <span>
         <form>
          <label>
           Opponent 2:
            <input type="text" name="name" />
          </label>
         </form>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
        </span>
        <p>
         Match 4
        </p>
        <span>
         <form>
          <label>
           Opponent 1:
            <input type="text" name="name" />
          </label>
         </form>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
        </span>
        <p>
        v.s.
        </p>
        <span>
         <form>
          <label>
           Opponent 2:
            <input type="text" name="name" />
          </label>
         </form>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
        </span>
        <p>
         Match 5
        </p>
        <span>
         <form>
          <label>
           Opponent 1:
            <input type="text" name="name" />
          </label>
         </form>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
        </span>
        <p>
        v.s.
        </p>
        <span>
         <form>
          <label>
           Opponent 2:
            <input type="text" name="name" />
          </label>
         </form>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
        </span>
        <p>
         Match 6
        </p>
        <span>
         <form>
          <label>
           Opponent 1:
            <input type="text" name="name" />
          </label>
         </form>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
        </span>
        <p>
        v.s.
        </p>
        <span>
         <form>
          <label>
           Opponent 2:
            <input type="text" name="name" />
          </label>
         </form>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
        </span>
        <p>
         Match 7
        </p>
        <span>
         <form>
          <label>
           Opponent 1:
            <input type="text" name="name" />
          </label>
         </form>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
        </span>
        <p>
        v.s.
        </p>
        <span>
         <form>
          <label>
           Opponent 2:
            <input type="text" name="name" />
          </label>
         </form>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
        </span>
        <p>
         Match 8
        </p>
        <span>
         <form>
          <label>
           Opponent 1:
            <input type="text" name="name" />
          </label>
         </form>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
        </span>
        <p>
        v.s.
        </p>
        <span>
         <form>
          <label>
           Opponent 2:
            <input type="text" name="name" />
          </label>
         </form>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
        </span>
        <p>
         Match 9
        </p>
        <span>
         <form>
          <label>
           Opponent 1:
            <input type="text" name="name" />
          </label>
         </form>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
        </span>
        <p>
        v.s.
        </p>
        <span>
         <form>
          <label>
           Opponent 2:
            <input type="text" name="name" />
          </label>
         </form>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
        </span>
        <p>
         Match 10
        </p>
        <span>
         <form>
          <label>
           Opponent 1:
            <input type="text" name="name" />
          </label>
         </form>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
        </span>
        <p>
        v.s.
        </p>
        <span>
         <form>
          <label>
           Opponent 2:
            <input type="text" name="name" />
          </label>
         </form>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
        </span>
        <p>
         Match 11
        </p>
        <span>
         <form>
          <label>
           Opponent 1:
            <input type="text" name="name" />
          </label>
         </form>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
        </span>
        <p>
        v.s.
        </p>
        <span>
         <form>
          <label>
           Opponent 2:
            <input type="text" name="name" />
          </label>
         </form>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
        </span>
        <p>
         Match 12
        </p>
        <span>
         <form>
          <label>
           Opponent 1:
            <input type="text" name="name" />
          </label>
         </form>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
        </span>
        <p>
        v.s.
        </p>
        <span>
         <form>
          <label>
           Opponent 2:
            <input type="text" name="name" />
          </label>
         </form>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
        </span>
        <p>
         Match 13
        </p>
        <span>
         <form>
          <label>
           Opponent 1:
            <input type="text" name="name" />
          </label>
         </form>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
        </span>
        <p>
        v.s.
        </p>
        <span>
         <form>
          <label>
           Opponent 2:
            <input type="text" name="name" />
          </label>
         </form>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
        </span>
        <p>
         Match 14
        </p>
        <span>
         <form>
          <label>
           Opponent 1:
            <input type="text" name="name" />
          </label>
         </form>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
        </span>
        <p>
        v.s.
        </p>
        <span>
         <form>
          <label>
           Opponent 2:
            <input type="text" name="name" />
          </label>
         </form>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
        </span>
        <p>
         Match 15
        </p>
        <span>
         <form>
          <label>
           Opponent 1:
            <input type="text" name="name" />
          </label>
         </form>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
        </span>
        <p>
        v.s.
        </p>
        <span>
         <form>
          <label>
           Opponent 2:
            <input type="text" name="name" />
          </label>
         </form>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
         <label>
          Name:
           <input type="text" name="name" />
         </label>
        </span>
      </div>
    );
  }
}

export default App;
