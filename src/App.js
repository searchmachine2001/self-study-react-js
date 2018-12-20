import React, { Component } from 'react';
import './App.css';
import Counters from './Counters';
class App extends Component {

  constructor(props) {
   super(props);
    this.state = {  }
}


  render() {
    return (
      <div className="App">
<h2>Nav</h2>
<br></br>
<br></br>
         <Counters customKey='one'/>
      </div>
    );
  }
}

export default App;
