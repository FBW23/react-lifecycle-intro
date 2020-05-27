import React, { Component } from 'react';
import './App.css';
import Fruit from './Fruit';

class App extends Component {

  constructor() {
    super()

    this.state = { 
      fruits: [],
      fruitNew: {title: '', color: ''},
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

  handleTitleInputChange = (e) => {
    // copy object - overwriting single property
    let fruitNew = { ...this.state.fruitNew, title: e.target.value}
    this.setState({ fruitNew: fruitNew })
  }

  handleColorInputChange = (e) => {
    // copy object - overwriting single property
    this.setState({ fruitNew: { ...this.state.fruitNew, color: e.target.value}})
  }

  addFruit = (e) => {
    e.preventDefault()
    // merge existing fruits with the new fruit
    let fruitsNew = [...this.state.fruits, this.state.fruitNew];
    localStorage.setItem("FRUITS", JSON.stringify(fruitsNew))
    this.setState({fruits: fruitsNew})
  }

  deleteFruit = (title) => {
    let fruitsCopy = this.state.fruits.filter(fruit => fruit.title !== title)
    localStorage.setItem("FRUITS", JSON.stringify(fruitsCopy))
    this.setState({fruits: fruitsCopy})
  }

  updateColor = (title) => {
    let fruitsCopy = [...this.state.fruits]
    let fruitToUpdate = fruitsCopy.find(fruit => fruit.title === title)
    
    // demand new color from the user
    fruitToUpdate.color = prompt("New color:", fruitToUpdate.color)
    localStorage.setItem("FRUITS", JSON.stringify(fruitsCopy))
    this.setState({fruits: fruitsCopy})
  }

  render() {

    
    let jsxFruits = this.state.fruits.map(fruit => (
      <Fruit 
        fruit={fruit} 
        changeColor={this.updateColor}
        deleteFruit={this.deleteFruit}
      ></Fruit>
    ))

    return (
      <div className="App">
        <header className="App-header">
          <h2>Fruity lifecycle</h2>
        </header>
        <main>
          <form onSubmit={this.addFruit}>
            <input placeholder="Fruit..." onChange={this.handleTitleInputChange} value={this.state.fruitNew.title} />
            <input placeholder="Color..." onChange={this.handleColorInputChange} value={this.state.fruitNew.color} />
            <button type="submit">ADD</button>
          </form>
          {/* <h4>Fruits</h4> */}
          <div className="cards fruits">{jsxFruits}</div>
        </main>
      </div>
    );
  }
}

export default App;
