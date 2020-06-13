import React from 'react';
import Feature from '../Feature/Feature';
import features from '../features.js';

export default function CustomizeLabtop(props){
    return(
        <form className="main__form">
            <h2>Customize your laptop</h2>
           {
              Object.keys(features).map((feature, idx) => {
                return (
                  <Feature {...props} feature={feature} idx={idx}/>
                );
              })
           } 
        </form>
    )
}

