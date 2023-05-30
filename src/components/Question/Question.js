import React from 'react';

const Question = () => {
    return (
        <div>
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
        </div>
    );
};

export default Question;