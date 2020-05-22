import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      nasa: [],
    }
  }

  componentDidMount() {
    let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=8xU4o02n5gJAwNEErowpY1mfE31mtk1ybYDbf3km"
  
    fetch(url)
    console.log(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          nasa: data,
        })
      })
  }

  render() {
    return (
      <div className="tab1">
        <p></p>
      </div>
      
      <div className="tab2">
        <p></p>
      </div>
      <div className="tab3">
        <p></p>
      </div>
      <div className="tab4">
        <p></p>
      </div>
      <div className="tab5">
        <p></p>
      </div>
    )
  }
}

export default App;
