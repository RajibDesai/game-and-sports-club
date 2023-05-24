import React, { useEffect, useState } from 'react';
import  './Home.css'
import Game from '../Game/Game';

const Home = () => {
    const [sports,setSports] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setSports(data))
    },[]);

    return (
        <div className='home-container'>
            <div className='games-container'>
            <h1>Game And Sports World</h1> 
            <h2>Our Today's Activity</h2>

           <div className='sports-container'>
           {
                sports.map(sport=> <Game 
                sport={sport}
                ></Game>)
            } 
           </div>
            </div>
           <div className='cart-container'>
               <h1>This is cart</h1>
           </div>
        </div>
    );
};

export default Home;