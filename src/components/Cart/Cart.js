import React from 'react';
import './cart.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = (props) => {
  const {cart,breack,handleBreackTime } = props;
  // console.log(cart);
  let time = 0;
  for(const game of cart){
       time=time+game.time
  }

const reactToastify =()=>{
  toast("Your Target is Complite")
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
               <button onClick={reactToastify} className='btn-toast btn btn-info mt-5'>Activity Completed</button>
               <ToastContainer/>
        </div>
    );
};

export default Cart;

