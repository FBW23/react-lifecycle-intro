import React, { Component } from 'react';
import './App.css';
import Fruit from './Fruit';

class App extends Component {

  constructor() {
    super()

    this.state = { 
      fruits: [],
      fruitNew: {title: '', color: ''}
    }
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

  handleFormTitleChange = (e) => {
    this.setState({ fruitNew: { ...this.state.fruitNew, title: e.target.value}})
  }

  handleFormColorChange = (e) => {
    this.setState({ fruitNew: { ...this.state.fruitNew, color: e.target.value}})
  }

  addFruit = (e) => {
    e.preventDefault()
    console.log(this.state.fruitNew)
    let fruitsNew = [...this.state.fruits, this.state.fruitNew];
    localStorage.setItem("FRUITS", JSON.stringify(fruitsNew))
    this.setState({fruits: fruitsNew})
  }

  deleteFruit = (title) => {
    let fruitsCopy = this.state.fruits.filter(fruit => fruit.title !== title)
    localStorage.setItem("FRUITS", JSON.stringify(fruitsCopy))
    this.setState({fruits: fruitsCopy})
  }

  changeColor = (title) => {
    let fruitsCopy = [...this.state.fruits]
    let fruitToUpdate = fruitsCopy.find(fruit => fruit.title === title)
    fruitToUpdate.color = prompt("New color:", fruitToUpdate.color)
    localStorage.setItem("FRUITS", JSON.stringify(fruitsCopy))
    this.setState({fruits: fruitsCopy})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Fruity lifecycle</h2>
        </header>
        <main>
          <form onSubmit={this.addFruit}>
            <input placeholder="Fruit..." onChange={this.handleFormTitleChange} value={this.state.fruitNew.title} />
            <input placeholder="Color..." onChange={this.handleFormColorChange} value={this.state.fruitNew.color} />
            <button type="submit">ADD</button>
          </form>
          {/* <h4>Fruits</h4> */}
          <div className="cards fruits">
            {this.state.fruits.map(fruit => (
              <Fruit 
                fruit={fruit} 
                changeColor={this.changeColor}
                deleteFruit={this.deleteFruit}
              ></Fruit>
            ))}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
