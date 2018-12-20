import React, { Component } from 'react';

class Counter extends Component {

    render() {
      var styles = {marginLeft: '10px'};
    return this.props.count.map((value, index)=>
            <li key={index}>
            <button className = "btn btn-info">{value === 0?'Zero':value}</button> 
            <button onClick={()=>{this.props.onDeleteHandler(index)}} style={styles} className="btn btn-danger">Delete</button>
            <button onClick={()=>{this.props.onIncrementHandler(index)}} style={styles} className="btn btn-danger">Increment</button>
            <button disabled={value===0?true:false} onClick={()=>{this.props.onDecrementHandler(index)}} style={styles} className="btn btn-danger">Decrement</button>
    </li>
        );
  }
}

export default Counter;