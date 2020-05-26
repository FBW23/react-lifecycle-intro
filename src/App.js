import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = { fruits: [] }
  }

  // load our initial data
  componentDidMount() {
    let fruits = localStorage.getItem("FRUITS")

    // set defaults from local storage . if local storage is empty - set some items
    if( fruits) {
      fruits = JSON.parse(fruits)
    }
    // no local storage data? - initialize some defaults
    else {
      fruits = [
        {title: "Banana", color: "yellow"},
        {title: "Cherry", color: "red"},
        {title: "Kiwi", color: "green"},
      ]
      // save your initial data to local storage
      localStorage.setItem("FRUITS", JSON.stringify(fruits))
    }

    this.setState({ fruits })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Fruity lifecycle</h2>
        </header>
        <main>    
          <h4>Fruits</h4>
          <div className="cards teachers">
            {this.state.fruits.map(fruit => (
              <div key={fruit.title}>{fruit.title}</div>
            ))}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
