import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = { fruits: [] }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Fruity lifecycle</h2>
        </header>
        <main>    
          <h4>Fruits</h4>
          <div className="cards fruits">
            {/* output list of fruits here please */}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
