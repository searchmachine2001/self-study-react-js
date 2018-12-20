import React, { Component } from 'react';
import Counter from './Counter';
import NoContent from './NoContent';
import AddNew from './AddNew';

class Counters extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count:['2', '3', '5'],
        value:"",
        };
    }

    onDelete = (countId) => {
        var count = this.state.count;
        count = count.filter((value, index)=>{
       return  countId !== index;
        });
        
        this.setState({count:count});
      }


      onIncrement = (countId) => {
        var count = this.state.count;
        count[countId] = parseInt(count[countId], 10) + 1;
        this.setState({count:count});
      }


      onDecrement = (countId) => {
        var count = this.state.count;
        count[countId] = parseInt(count[countId], 10) - 1;
        this.setState({count:count});
      }

      testRender = function(){
        if(this.state.count.length === 0){
            return <NoContent message="Your cart is empty."/>;
                    }else{
                        return (
                <ul className="list-group">
                           <Counter
                           count={this.state.count}
                           onIncrementHandler={this.onIncrement} 
                           onDecrementHandler={this.onDecrement} 
                           onDeleteHandler={this.onDelete} 
                           />
                            </ul> 
                            );
                    }
      }



      handleChange = (event)=> {
        this.setState({value: event.target.value});
      }

      handleSubmit = (event)=> {
          const count = this.state.count;
          count.push(this.state.value);
        this.setState({count: count});
        event.preventDefault();
      }
    

    render() { 
       return (
           <React.Fragment>
               {this.testRender()}
               <AddNew 
               handleChange={this.handleChange} 
               handleSubmit={this.handleSubmit} 
               value={this.state.value} />
               </React.Fragment>
       );
       
       
    }
}
 
export default Counters;