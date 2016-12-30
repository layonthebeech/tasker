import React, { Component } from 'react';

const App = React.createClass({
  render () {
    console.log('appthis', this)
    return (
      <div className='App'>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
});

export default App;
