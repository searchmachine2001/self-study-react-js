import React, { Component } from 'react';

class NoContent extends Component {
    render() {
    return <div className="alert alert-warning">{this.props.message}</div> ;
  }
}

export default NoContent;