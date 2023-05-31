import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faFootball } from '@fortawesome/free-solid-svg-icons'
import  './Home.css'
import Game from '../Game/Game';
import Myself from '../MySelf/Myself';
import Cart from '../Cart/Cart';
import Question from '../Question/Question';

const Home = () => {
    const [sports,setSports] = useState([]);
    const [cart,setCart] = useState([])
    const [breack,setBreack]=useState(0)

    const breackTime =10
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setSports(data))
    },[]);

    const handleAddToCard = (sport)=>{
      // console.log(sport)
      const newCart = [...cart,sport];
      setCart(newCart)
    }

const handleBreackTime = () =>{
  
  setBreack(breackTime)
}
    
    return (
        <div>
          <div className='home-container'>
            <div className='games-container'>
              <h1><FontAwesomeIcon icon={faFootball}></FontAwesomeIcon> Game And Sports World</h1> 
              <h2>Our Today's Activity</h2>

             <div className='sports-container'>
               {
                  sports.map(sport=> <Game 
                  handleAddToCard= {handleAddToCard}
                   key={sport.id}
                  sport={sport}
                  ></Game>)
                } 
             </div>
           </div>
              <div className='cart-container'>
                  <Myself></Myself>
                  <Cart cart={cart} breack={breack}
                   handleBreackTime={handleBreackTime}>
                  </Cart>
              </div>
         </div>
         <div><Question></Question></div>
        </div>
    );
};
export default Home;