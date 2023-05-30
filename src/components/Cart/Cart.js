import React from 'react';
import './cart.css'

const Cart = (props) => {
  const {cart,breack,handleBreackTime } = props;
  // console.log(cart);
  let time = 0;
  for(const game of cart){
       time=time+game.time
  }



    return (
        <div className="cart">
             <h3 className='fw-bold mt-3'>Add A Break</h3>
               <div className="card">
                  <div className="card-body">
                  <p>
                    <button onClick={(e)=>handleBreackTime} className='btn btn-info rounded-circle'>10S</button>
                    <button className='btn btn-info rounded-circle'>10S</button>
                    <button className='btn btn-info rounded-circle'>15s</button>
                    <button className='btn btn-info rounded-circle'>20s</button>
                    <button className='btn btn-info rounded-circle'>25s</button>
                  </p>
                 </div>
               </div>
               <h3 className='fw-bold mt-3'>Practice Details</h3> 
                <div className="card">
                  <div className="card-body">
                  <h4>Practice Time: {time}</h4>
                  <h4>Breack Time : {breack}</h4>
                  </div>
               </div> 
        </div>
    );
};

export default Cart;

