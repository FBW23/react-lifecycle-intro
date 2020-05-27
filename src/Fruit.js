import React from 'react';

const Fruit = (props) => {

  // fetch fruit from props
  let { fruit, changeColor, deleteFruit } = props;

  return (
    <div className="fruit" style={{ background: fruit.color}} key={fruit.title} >
      <span onClick={() => changeColor(fruit.title)}>{fruit.title}</span> 
      <span onClick={() => deleteFruit(fruit.title)}>&#9747;</span>
    </div>
  );
};

export default Fruit;
