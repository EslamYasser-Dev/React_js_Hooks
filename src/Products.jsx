
import React, { useState } from 'react';
import products from './ProductData'

function Products() {
  const [data, setData] = useState(products);
  const [amount, setAmount] = useState(0);
  const [cartItems, setItems] = useState([])

  const handleIncrement = () => {
    setAmount(amount)
    return amount + 1;
  };

  const handleDecrement = () => {
    setAmount(amount)
    return amount - 1;
  };

  const handleAddToCart = () => {
    setAmount(amount)
    return amount - 1;
  };

  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>
          <img src={product.img} alt="its an img" width="200vh" height="190vh" />
          <h2>{product.name}</h2>
          <h3>{product.price}$</h3>
          <h4>{product.category}</h4>
          <p>{product.description}</p>

          <button onClick={() => handleIncrement}> + </button>
          <span>{amount}</span>
          <button onClick={handleDecrement}> - </button>
          <br/>
          <button onClick={handleAddToCart}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}
export default Products