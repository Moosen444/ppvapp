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
     <div>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5> Opponent 1 </h5>
             <form>
              <select class="chosen select">
               <option>Bayley</option>
               <option>Lana</option>
               <option>Peyton</option>
              </select>
             </form>
          </div>
        </div>
      </div>
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
            <input type="text" name="name" placeholder="Andrew's Bet" />
          </label>
         <button onClick={this.incrementwinner1}>Winner {this.state.winner1}</button>
        </span>
        <span>
          <label>
           Name:
            <input type="text" name="name" placeholder="Jake's Bet" />
          </label>
         <button onClick={this.incrementwinner2}>Winner {this.state.winner2}</button>
        </span>
        <span>
          <label>
           Name:
            <input type="text" name="name" placeholder="Nick's Bet" />
          </label>
         <button onClick={this.incrementwinner3}>Winner {this.state.winner3}</button>
        </span>
        <span>
          <label>
           Name:
            <input type="text" name="name" placeholder="Jessica's Bet" />
          </label>
         <button onClick={this.incrementwinner4}>Winner {this.state.winner4}</button>
        </span>
        <div>
        <button onClick={this.reset}>Reset</button>
        </div>
        <h3> Match 1 </h3>
         <span>
         <div class="container">
           <div class="row">
             <div class="col-md-6">
               <h5> Opponent 1 </h5>
                <form>
                 <select class="chosen select">
                  <option>Bayley</option>
                  <option>Lana</option>
                  <option>Peyton</option>
                 </select>
                </form>
             </div>
           </div>
         </div>
          <label>
           Name:
            <input type="text" name="name" placeholder="Andrew's Bet" />
          </label>
          <label>
           Name:
            <input type="text" name="name" placeholder="Jake's Bet" />
          </label>
          <label>
           Name:
            <input type="text" name="name" placeholder="Nick's Bet" />
          </label>
          <label>
           Name:
            <input type="text" name="name" placeholder="Jessica's Bet" />
          </label>
         </span>
         <h5> V.S. </h5>
        <span>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h5> Opponent 2 </h5>
               <form>
                <select class="chosen select">
                 <option>Bayley</option>
                 <option>Lana</option>
                 <option>Peyton</option>
                </select>
               </form>
            </div>
          </div>
        </div>
         <label>
          Name:
           <input type="text" name="name" placeholder="Andrew's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jake's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Nick's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jessica's Bet" />
         </label>
        </span>
        <h3> Match 2 </h3>
        <span>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h5> Opponent 1 </h5>
               <form>
                <select class="chosen select">
                 <option>Bayley</option>
                 <option>Lana</option>
                 <option>Peyton</option>
                </select>
               </form>
            </div>
          </div>
        </div>
         <label>
          Name:
           <input type="text" name="name" placeholder="Andrew's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jake's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Nick's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jessica's Bet" />
         </label>
        </span>
        <h5> V.S. </h5>
        <span>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h5> Opponent 2 </h5>
               <form>
                <select class="chosen select">
                 <option>Bayley</option>
                 <option>Lana</option>
                 <option>Peyton</option>
                </select>
               </form>
            </div>
          </div>
        </div>
         <label>
          Name:
           <input type="text" name="name" placeholder="Andrew's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jake's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Nick's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jessica's Bet" />
         </label>
        </span>
        <h3> Match 3 </h3>
        <span>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h5> Opponent 1 </h5>
               <form>
                <select class="chosen select">
                 <option>Bayley</option>
                 <option>Lana</option>
                 <option>Peyton</option>
                </select>
               </form>
            </div>
          </div>
        </div>
         <label>
          Name:
           <input type="text" name="name" placeholder="Andrew's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jake's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Nick's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jessica's Bet" />
         </label>
        </span>
        <h5> V.S. </h5>
        <span>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h5> Opponent 2 </h5>
               <form>
                <select class="chosen select">
                 <option>Bayley</option>
                 <option>Lana</option>
                 <option>Peyton</option>
                </select>
               </form>
            </div>
          </div>
        </div>
         <label>
          Name:
           <input type="text" name="name" placeholder="Andrew's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jake's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Nick's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jessica's Bet" />
         </label>
        </span>
        <h3> Match 4 </h3>
        <span>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h5> Opponent 1 </h5>
               <form>
                <select class="chosen select">
                 <option>Bayley</option>
                 <option>Lana</option>
                 <option>Peyton</option>
                </select>
               </form>
            </div>
          </div>
        </div>
         <label>
          Name:
           <input type="text" name="name" placeholder="Andrew's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jake's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Nick's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jessica's Bet" />
         </label>
        </span>
        <h5> V.S. </h5>
        <span>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h5> Opponent 2 </h5>
               <form>
                <select class="chosen select">
                 <option>Bayley</option>
                 <option>Lana</option>
                 <option>Peyton</option>
                </select>
               </form>
            </div>
          </div>
        </div>
         <label>
          Name:
           <input type="text" name="name" placeholder="Andrew's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jake's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Nick's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jessica's Bet" />
         </label>
        </span>
        <h3> Match 5 </h3>
        <span>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h5> Opponent 1 </h5>
               <form>
                <select class="chosen select">
                 <option>Bayley</option>
                 <option>Lana</option>
                 <option>Peyton</option>
                </select>
               </form>
            </div>
          </div>
        </div>
         <label>
          Name:
           <input type="text" name="name" placeholder="Andrew's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jake's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Nick's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jessica's Bet" />
         </label>
        </span>
        <h5> V.S. </h5>
        <span>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h5> Opponent 2 </h5>
               <form>
                <select class="chosen select">
                 <option>Bayley</option>
                 <option>Lana</option>
                 <option>Peyton</option>
                </select>
               </form>
            </div>
          </div>
        </div>
         <label>
          Name:
           <input type="text" name="name" placeholder="Andrew's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jake's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Nick's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jessica's Bet" />
         </label>
        </span>
        <h3> Match 6 </h3>
        <span>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h5> Opponent 1 </h5>
               <form>
                <select class="chosen select">
                 <option>Bayley</option>
                 <option>Lana</option>
                 <option>Peyton</option>
                </select>
               </form>
            </div>
          </div>
        </div>
         <label>
          Name:
           <input type="text" name="name" placeholder="Andrew's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jake's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Nick's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jessica's Bet" />
         </label>
        </span>
        <h5> V.S. </h5>
        <span>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h5> Opponent 2 </h5>
               <form>
                <select class="chosen select">
                 <option>Bayley</option>
                 <option>Lana</option>
                 <option>Peyton</option>
                </select>
               </form>
            </div>
          </div>
        </div>
         <label>
          Name:
           <input type="text" name="name" placeholder="Andrew's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jake's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Nick's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jessica's Bet" />
         </label>
        </span>
        <h3> Match 7 </h3>
        <span>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h5> Opponent 1 </h5>
               <form>
                <select class="chosen select">
                 <option>Bayley</option>
                 <option>Lana</option>
                 <option>Peyton</option>
                </select>
               </form>
            </div>
          </div>
        </div>
         <label>
          Name:
           <input type="text" name="name" placeholder="Andrew's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jake's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Nick's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jessica's Bet" />
         </label>
        </span>
        <h5> V.S. </h5>
        <span>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h5> Opponent 2 </h5>
               <form>
                <select class="chosen select">
                 <option>Bayley</option>
                 <option>Lana</option>
                 <option>Peyton</option>
                </select>
               </form>
            </div>
          </div>
        </div>
         <label>
          Name:
           <input type="text" name="name" placeholder="Andrew's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jake's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Nick's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jessica's Bet" />
         </label>
        </span>
        <h3> Match 8 </h3>
        <span>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h5> Opponent 1 </h5>
               <form>
                <select class="chosen select">
                 <option>Bayley</option>
                 <option>Lana</option>
                 <option>Peyton</option>
                </select>
               </form>
            </div>
          </div>
        </div>
         <label>
          Name:
           <input type="text" name="name" placeholder="Andrew's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jake's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Nick's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jessica's Bet" />
         </label>
        </span>
        <h5> V.S. </h5>
        <span>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h5> Opponent 2 </h5>
               <form>
                <select class="chosen select">
                 <option>Bayley</option>
                 <option>Lana</option>
                 <option>Peyton</option>
                </select>
               </form>
            </div>
          </div>
        </div>
         <label>
          Name:
           <input type="text" name="name" placeholder="Andrew's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jake's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Nick's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jessica's Bet" />
         </label>
        </span>
        <h3> Match 9 </h3>
        <span>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h5> Opponent 1 </h5>
               <form>
                <select class="chosen select">
                 <option>Bayley</option>
                 <option>Lana</option>
                 <option>Peyton</option>
                </select>
               </form>
            </div>
          </div>
        </div>
         <label>
          Name:
           <input type="text" name="name" placeholder="Andrew's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jake's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Nick's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jessica's Bet" />
         </label>
        </span>
        <h5> V.S. </h5>
        <span>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h5> Opponent 2 </h5>
               <form>
                <select class="chosen select">
                 <option>Bayley</option>
                 <option>Lana</option>
                 <option>Peyton</option>
                </select>
               </form>
            </div>
          </div>
        </div>
         <label>
          Name:
           <input type="text" name="name" placeholder="Andrew's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jake's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Nick's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jessica's Bet" />
         </label>
        </span>
        <h3> Match 10 </h3>
        <span>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h5> Opponent 1 </h5>
               <form>
                <select class="chosen select">
                 <option>Bayley</option>
                 <option>Lana</option>
                 <option>Peyton</option>
                </select>
               </form>
            </div>
          </div>
        </div>
         <label>
          Name:
           <input type="text" name="name" placeholder="Andrew's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jake's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Nick's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jessica's Bet" />
         </label>
        </span>
        <h5> V.S. </h5>
        <span>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h5> Opponent 1 </h5>
               <form>
                <select class="chosen select">
                 <option>Bayley</option>
                 <option>Lana</option>
                 <option>Peyton</option>
                </select>
               </form>
            </div>
          </div>
        </div>
         <label>
          Name:
           <input type="text" name="name" placeholder="Andrew's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jake's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Nick's Bet" />
         </label>
         <label>
          Name:
           <input type="text" name="name" placeholder="Jessica's Bet" />
         </label>
        </span>
      </div>
    </div>
    );
  }
}

export default App;
