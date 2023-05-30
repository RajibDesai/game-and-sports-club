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
            </div>
        </div>
    );
};

export default Question;