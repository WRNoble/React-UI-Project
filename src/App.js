import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      nasa: [];
    }
  }

  componentDidMount() {
    let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=8xU4o02n5gJAwNEErowpY1mfE31mtk1ybYDbf3km"
  }
}

export default App;
