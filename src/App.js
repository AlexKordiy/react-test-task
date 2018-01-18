import React, { Component } from 'react';
import './App.css';
//import {Button} from 'react-bootstrap';
//import TextField from 'material-ui/TextField';
import BoardGrid from './Components/BoardGrid';
import Page from './Components/Page';



class App extends Component {
  render() {
    return <Page child={BoardGrid}/>;
  }
}

export default App;
