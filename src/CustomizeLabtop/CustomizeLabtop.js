import React from 'react';
import Feature from '../Feature/Feature';

export default function CustomizeLabtop(props){
    return(
        <form className="main__form">
            <h2>Customize your laptop</h2>
           {
              Object.keys(props.features).map((feature, idx) => {
                return (
                  <Feature {...props} feature={feature} idx={idx}/>
                );
              })
           } 
        </form>
    )
}

