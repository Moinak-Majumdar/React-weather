import React from 'react';
import AirIcon from '@mui/icons-material/Air';

const Secondary = (props) => {

    return(
    <>
        <div className='h-auto w-full flex justify-center items-center pb-8'>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
                {/* temp min max*/}
                <div className='inline-flex justify-center items-center dt'>
                    <p className='text-3xl h-full flex justify-center items-center my-4 mx-3'>
                        <i className={props.tog?"wi wi-thermometer text-indigo-700":"wi wi-thermometer text-teal-400"}></i>
                    </p>
                    <h2 className={props.tog?"text-indigo-800 font-semibold":"text-stone-300 font-semibold"}>{"Minimum: "+props.min}&deg;c<br/>{"Maximum: "+props.max}&deg;c</h2>
                </div>
                {/* humidity */}
                <div className='inline-flex justify-center items-center dt'>
                    <p className='text-3xl h-full flex justify-center items-center my-4 mx-2'>
                        <i className={props.tog?"wi wi-humidity text-indigo-700":"wi wi-humidity text-teal-400"}></i>
                    </p>
                    <h2 className={props.tog?"text-indigo-800 font-semibold":"text-stone-300 font-semibold"}>{`humidity: ${props.hum}%  `}</h2>
                </div>
                {/* pressur */}
                <div className='inline-flex justify-center items-center dt'>
                    <p className='text-3xl h-full flex justify-center items-center my-4 mx-2'>
                        <i className={props.tog?"wi wi-barometer text-indigo-700":"wi wi-barometer text-teal-400"}></i>
                    </p>
                    <h2 className={props.tog?"text-indigo-800 font-semibold":"text-stone-300 font-semibold"}>{`Pressure: ${props.press}hPa`}</h2>
                </div>
                {/* wind */}
                <div className='inline-flex justify-center items-center dt'>
                    <p className='h-full flex justify-center items-center my-4 mx-2'>
                        <AirIcon className={props.tog?"text-indigo-700":"text-teal-400"} fontSize="large"></AirIcon>
                    </p>
                    <h2 className={props.tog?"text-indigo-800 font-semibold":"text-stone-300 font-semibold"}> {`Speed: ${props.speed}m/s`} <br/>
                    {`Gust: ${props.gust}m/s`}</h2>
                </div>
            </div>
        </div>
    </>
    );
}

export {Secondary};
