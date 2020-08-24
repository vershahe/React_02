import React from 'react';

import './App.css';
import Hello from './Hello';
//import mySubmitHandler from './MyForm'


function App() {
  return (
    <div className="App">
     <Hello name="to application"></Hello>
     
     <form >
     
        <p>Enter your skill:</p>
        <input type="text"/>
      </form>

      <input
        type='submit'
      />
      

    </div>
  );
}


export default App;



