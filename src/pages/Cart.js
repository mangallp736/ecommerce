import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
    const { cart, setCart } = useContext(CartContext); ///global data access

    const removeFromCart = (index) => {
    const newCart = cart.filter((item, i) => i !== index);
    setCart(newCart);
    };
    const increaseQty = (index) => {
  const newCart = [...cart];
  newCart[index].quantity += 1;
  setCart(newCart);
};

const decreaseQty = (index) => {
  const newCart = [...cart];

  if (newCart[index].quantity > 1) {
    newCart[index].quantity -= 1;
  }

  setCart(newCart);
};

const total = cart.reduce((acc, item) => {
  return acc + item.price * item.quantity;
}, 0);

    return (
        <div className='container'>
            <h1>CartPage</h1>
            {/* loop wise data show */}
            {cart.map((item, index) => (
                <div>
                    <h3>{item.title}</h3>
                    <p>INR{item.price}</p>

                    <button onClick={() => decreaseQty(index)} className='btn-xs btn-light mx-1'>-</button>
                      <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(index)} className='btn-xs btn-light mx-1'>+</button>
                    <button onClick={() => removeFromCart(index)} className='btn-sm btn-success mx-1'>
                      Remove
                    </button>
                    <h2>Total: Rs.{total}</h2>
                </div>
            ))}           
            
        </div>
        
    );
}

export default Cart;
