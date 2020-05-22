import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      person: false,
    }
  }

  componentDidMount() {
    let url = 'https://jsonplaceholder.typicode.com/users';
  
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          person: true,
          data: data,
        })
      })
  }

  render() {
    
    let { person, data } = this.state
      console.log(data)
    
        return (
          <div className="App">
            <ul>
              {data.map(post => (
                <li key={data.id}>{data.title}</li>
              ))}
            </ul>
          </div>
        )
    

    // return (
    //   <div className="container">
    //     <div className="tab1">Hello
    //       <p className="content">hello</p>
    //     </div>
    //     <div className="tab2">Hello
    //       <p className="content">hello</p>
    //     </div>
    //     <div className="tab3">Hello
    //       <p className="content">hello</p>
    //     </div>
    //     <div className="tab4">Hello
    //       <p className="content">hello</p>
    //     </div>
    //     <div className="tab5">Hello
    //       <p className="content">hello</p>
    //     </div>
    //   </div>
    //   )
  }
}

export default App;
