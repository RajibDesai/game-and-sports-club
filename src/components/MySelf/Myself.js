import React from 'react';
import './Myself.css'

const Myself = () => {
    return (
            <div class="card">
                  <div class="card-body">
                  <h2>Name:Rajib Desai</h2>
                   <h3>Teacher & Web Developer</h3>
                   <p>From Dhaka</p>
                    <div className='info-myslf'>
                        <div>
                            <h4>Height</h4> 
                            <p className='bg bg-info'>5ft 8 inch</p>
                        </div>
                        <div>
                            <h4>Weight</h4>
                            <p className='bg bg-info'>65 Kg</p>
                        </div>
                        <div>
                            <h4>Age</h4>
                            <p className='bg bg-info'>35Y</p>
                        </div>
                    </div>
                 </div>
            </div>
    );
};

export default Myself;