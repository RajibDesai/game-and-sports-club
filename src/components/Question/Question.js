import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <div>
            <h4>How does react js works</h4>
            <p>Instead of manipulating the browser's DOM directly,
                 React creates a virtual DOM in memory, 
                where it does all the necessary manipulating, 
                before making the changes in the browser DOM.</p>
            </div>
            <div>
                <h4>props Vs. state</h4>
                <p>The status of a react class component 
                    instance can be described 
                     as an object of a collection of observed features
                      that control 
                     the component’s behavior. In other words, the component’s 
                    state is an entity with some details that can 
                    alter during the component’s lifetime.</p>
                    <p>
                    React is a library focused on components that separate the user 
                    interface into reusable little bits. These components have to 
                    transmit (send data to each other) 
                    in some cases, and the way to transmit data among components
                     is through props. 
                    </p>
            </div>

            <div>
                <h4>different works of useEffect except data load</h4>
                <p>useEffect runs on every render. That means that when 
                    the count changes, a render happens, which then triggers
                     another effect.

                      This is not what we want. There are several 
                      ways to control when side effects run.

                      We should always include the second parameter which accepts an array.
                       We can optionally
                       pass dependencies to useEffect in this array.</p>
            </div>
        </div>
    );
};

export default Question;