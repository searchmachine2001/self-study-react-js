import React  from 'react';

class AddNew extends React.Component {
   
  
    render() {
      return (
        <form onSubmit={this.props.handleSubmit}>
        <div className="form-group">
        <label>
            Name:
            <input className="form-control" type="text" value={this.props.value} onChange={this.props.handleChange} />
          </label>
        </div>
  
          <input type="submit" value="Add" />
        </form>
      );
    }
  }

  export default AddNew;