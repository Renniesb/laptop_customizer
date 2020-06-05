import React from 'react';
import SummaryTotal from './../SummaryTotal/SummaryTotal';
import Summary from './../Summary/Summary';
export default function YourCart({currency,selected}){
    return(
        <section className="main__summary">
            <h2>Your cart</h2>
            {Object.keys(selected).map((feature, idx) => {

                return <Summary selected={selected} currency={currency} feature={feature} idx={idx} />
            })}

            <SummaryTotal selected={selected} currency={currency} />
        </section>
    )
}