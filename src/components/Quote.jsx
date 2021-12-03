import React, { Fragment, useEffect, useState } from 'react';

const Quote = () => {
    // set API url
    const API_URL = "https://www.breakingbadapi.com/api/quote/random";

    // Quote State
    let [quote, setQuote] = useState({
        quote_id: 1,
        quote: "",
        author: "",
        series: ""
    })
    
    // get Quote by Breaking Bad API https://www.breakingbadapi.com/api/
    const getQuote = () => {
        fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            setQuote(data[0]);
        })
    }

    useEffect(() => {
        getQuote();
    }, []);
    

    return ( 
        <Fragment>
            <figure className="text-center bg-light p-3 rounded">
                <blockquote className="blockquote">
                <p>{quote.quote}</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                {quote.author} <cite title="Source Title">{quote.series}</cite>
                </figcaption>
            </figure>
            <button
                onClick={getQuote}
            >Get Quote</button>
        </Fragment>
    );
}
 
export default Quote;