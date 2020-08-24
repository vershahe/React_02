import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App  from './App';
import * as serviceWorker from './serviceWorker';
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
    };
  }
  mySubmitHandler = (event) => {
    //event.preventDefault();
    alert("You are submitting " + this.state.username +this.state.age);
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});  }
  render() {
    return (
      <div class="form">
      <form onSubmit={this.mySubmitHandler}>
      <h1>Hello {this.state.username} {this.state.age}</h1>
      <p>Enter your name & age and submit:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your age:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      <p></p>
      <input
        type='submit'
      />
      </form>
      </div>
    );
  }
}
ReactDOM.render(
  <React.StrictMode>
    <App />
    <MyForm/>
  </React.StrictMode>,
  document.getElementById('root')
);

//ReactDOM.render(<React.StrictMode><Car /></React.StrictMode>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
