import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Navbar from 'react-bootstrap/lib/Navbar';
import List from './List/List';
import './Bootstrap.css';

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <span>Test</span>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>          
            <List />          
        </Grid>
      </div>)
  }
});

export default App;

