import React from 'react';
import slugify from 'slugify';
import FeatureItem from '../FeatureItem';
import features from '../features.js';

export default function Feature(props){
    
    const featureHash = props.feature + '-' + props.idx;
    const options = features[props.feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
            
            <FeatureItem {...props} itemHash = {itemHash} item={item}/>
        );
    });
    
    return (
    <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
            <h3>{props.feature}</h3>
        </legend>
        {options}
    </fieldset>
    )
    
}












