import React from 'react';
import './Game.css'

const Game = ({sport,handleAddToCard}) => {
    // const {sport,handleAddToCard} = props
    const {img,name,time}=sport
    // console.log(props.handleAddToCard)
   
    return (
        <div className='game-container'>
            <img src={img} alt=""/>
            <div>
                <h3>Name : {name}</h3>
                <h4>Time :{time} </h4>
                <button  onClick={()=> handleAddToCard(sport)} className='cart-btn btn btn-success'>Add To List</button>
            </div>

        </div>
    );
};

export default Game;