import React from 'react';

const Fruit = (props) => {
  // fetch fruit from props
  let { fruit, changeColor, deleteFruit } = props;
  let fruitStyle = {
    // background: fruit.color
  };

  return (
    <div className="fruit" style={fruitStyle} key={fruit.title} >
      <span onClick={() => changeColor(fruit.title)}>{fruit.title}</span> 
      <span onClick={() => deleteFruit(fruit.title)}>[X]</span>
    </div>
  );
};

export default Fruit;
