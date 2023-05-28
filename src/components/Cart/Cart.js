import React, { useState } from 'react';

const Cart = (props) => {
  const {cart} = props;
  console.log(cart);
  let time = 0;
  for(const game of cart){
       time=time+game.time
  }

  const [rest,setRest] = useState([]);
  const AddRestToCard = (rest)=>{
  
  
    setRest(rest)
  }

    return (
        <div>
             <h3 className='fw-bold mt-3'>Add A Break</h3>
               <div className="card">
                  <div className="card-body">
                  <p>
                    <button onClick={AddRestToCard} className='btn btn-info rounded-circle'>10S</button>
                    <button onClick={AddRestToCard} className='btn btn-info rounded-circle'>10S</button>
                    <button onClick={AddRestToCard} className='btn btn-info rounded-circle'>15s</button>
                    <button onClick={AddRestToCard} className='btn btn-info rounded-circle'>20s</button>
                    <button onClick={AddRestToCard} className='btn btn-info rounded-circle'>25s</button>
                  </p>
                 </div>
               </div>
               <h3 className='fw-bold mt-3'>Practice Details</h3> 
                <div className="card">
                  <div className="card-body">
                  <h4>Practice Time: {time}</h4>
                  <h4>Breack Time: {rest}</h4>
                  </div>
               </div> 
        </div>
    );
};

export default Cart;

// import React from 'react';

// const Cart = (props) => {
//   const {cart} = props;
//   console.log(cart);
//   let time = 0;
//   for(const game of cart){
//        time=time+game.time
//   }
//   return (
//     <div>
//       <p>Practice Detail: {time}</p>
//     </div>
//   );
// };

// export default Cart;