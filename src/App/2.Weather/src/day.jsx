import React from 'react';
import AirIcon from '@mui/icons-material/Air';


const Day = (props) => {

    return(
    <>
        <section>
            <div className='h-auto w-full xl:px-24 lg:px-24 md:px-16 sm:px-8 px-8 pt-4 flex justify-between'>
                <h1 className={props.tog?"text-xl":"text-xl text-rose-400"}>{`${props.bar}:`}</h1>
                <h1 className={props.tog?"italic capitalize xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-xl font-extrabold dt":"italic capitalize xl:text-xl lg:text-xl md:text-xl sm:text-lg text-lg text-cyan-400 font-extrabold dt"}>{`${props.weather}`}</h1>
            </div>
            <div className='w-full h-auto py-2 flex justify-center items-center'>
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
                    {/* temprature */}
                    <div className='inline-flex justify-center items-center dt my-1'>
                        <p className='text-3xl h-full flex justify-center items-center my-4 ml-2 mr-3'>
                            <i className={props.tog?"wi wi-thermometer text-indigo-700":"wi wi-thermometer text-teal-400"}></i>
                        </p>
                        <div className={props.tog?"text-violet-800 font-semibold":"text-stone-300 font-semibold"}>
                            <h1>{`Predicted: ${props.temp}`}&deg;c</h1>
                            <h1>{`Minimum: ${props.min}`}&deg;c</h1>
                            <h1>{`Maximum: ${props.max}`}&deg;c</h1>
                        </div>
                    </div>
                     {/* humidity */}
                     <div className='inline-flex justify-center items-center dt my-1'>
                        <p className='text-3xl h-full flex justify-center items-center my-4 mx-2'>
                            <i className={props.tog?"wi wi-humidity text-indigo-700":"wi wi-humidity text-teal-400"}></i>
                        </p>
                        <h1 className={props.tog?"text-violet-800 font-semibold ":"text-stone-300 font-semibold "}>{`Humidity:  ${props.hum}%`}</h1>
                    </div>
                    {/* pressure */}
                    <div className='inline-flex justify-center items-center dt my-1'>
                        <p className='text-3xl h-full flex justify-center items-center my-4 mx-2'>
                            <i className={props.tog?"wi wi-barometer text-indigo-700":"wi wi-barometer text-teal-400"}></i>
                        </p>
                        <h1 className={props.tog?"text-violet-800 font-semibold":"text-stone-300 font-semibold"}>{`Pressure: ${props.press}hPa`}</h1>
                    </div>
                    {/* wind */}
                    <div className='inline-flex justify-center items-center dt my-1'>
                        <p className='h-full flex justify-center items-center my-4 ml-3 mr-1'>
                            <AirIcon className={props.tog?"text-indigo-700":"text-teal-400"} fontSize="large"></AirIcon>
                        </p>
                        <div className={props.tog?"text-violet-800 font-semibold":"text-stone-300 font-semibold"}>
                            <h1>{`Gust: ${props.gust} m/s`}</h1>
                            <h1>{`Speed: ${props.speed} m/s`}</h1>
                            <h1>{`At: ${props.deg}`}&deg;</h1>
                        </div>
                    </div>
                    {/* clouds */}
                    <div className='inline-flex justify-center items-center dt my-1'>
                        <p className='text-3xl h-full flex justify-center items-center my-4 ml-1 mr-3'>
                            <i className={props.tog?"wi wi-day-cloudy-high text-indigo-700":"wi wi-night-cloudy-high text-teal-400"}></i>
                        </p>
                        <div className={props.tog?"text-violet-800 font-semibold":"text-stone-300 font-semibold"}>
                            <h1>{`Cloudiness: ${props.cloud}%`}</h1>
                            <h1>{`Visibility ${props.vis}`}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
}

export {Day};