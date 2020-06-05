import React from 'react';



export default function Summary({selected,currency,feature,idx}){

        
        const featureHash = feature + '-' + idx;
        const selectedOption = selected[feature];
    
        return (
          <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{feature} </div>
            <div className="summary__option__value">{selectedOption.name}</div>
            <div className="summary__option__cost">
              {currency.format(selectedOption.cost)}
            </div>
          </div>
        );
   
    
}