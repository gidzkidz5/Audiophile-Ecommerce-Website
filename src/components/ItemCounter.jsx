import React, { useState } from 'react';

const ItemCounter = ({ onValueChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    onValueChange(quantity + 1); // Notify parent about the quantity change
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      onValueChange(quantity - 1); // Notify parent about the quantity change
    }
  };

  return (
    <div className='item-counter flex'>
      <button onClick={handleDecrement} className='cart-btn'>-</button>
      <input type="text" value={quantity} readOnly />
      <button onClick={handleIncrement} className='cart-btn'>+</button>
    </div>
  );
};

export default ItemCounter;
