import React, { useEffect } from 'react';
import { Work2 } from './src/Work2';

const WeatherApp = () => {

    useEffect(() => {
        document.title='WeatherJIJI.com';
        document.body.style.backgroundColor = "#bdc3c7";
    })

    return(
    <>
        <Work2 />
    </>
    );
}

export {WeatherApp};
