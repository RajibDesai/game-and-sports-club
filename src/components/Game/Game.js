import React from 'react';
import './Game.css'

const Game = (props) => {
    const {img,name,time}=props.sport
    // console.log(props)
    return (
        <div className='game-container'>
            <img src={img} alt=""/>
            <div>
                <h3>Name : {name}</h3>
                <h4>Time :{time} </h4>
                <button>Add To List</button>
            </div>

        </div>
    );
};

export default Game;