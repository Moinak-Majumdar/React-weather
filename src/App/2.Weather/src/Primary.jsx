import React from 'react';

const Primary = (props) => {

    return(
    <>  
        <div className='h-auto w-full xl:px-10 lg:px-10 md:px-4 sm:px-1 px-1 py-6 flex justify-between'>
            {/* tempatature */}
            <div className='xl:pl-6 lg:pl-6 md:pl-4 sm:pl-0 pl-0 dt'>
                <span className={props.tog?"text-violet-500 text-6xl font-medium":"text-teal-400 text-6xl font-medium"}>{props.temp}&deg;c</span>
            </div>
            {/* weather condition and place*/}
            <div className='xl:pr-8 lg:pr-8 md:pr-6 sm:pr-0 pr-0'>
                <span className={props.tog?"capitalize xl:text-xl lg:text-xl md:text-xl sm:text-lg text-lg text-violet-500 font-bold dt":"capitalize xl:text-xl lg:text-xl md:text-xl sm:text-lg text-lg text-purple-400 font-bold dt"}>{props.weather}</span>
                <p className={props.tog?"text-gray-800 font-bold dt":"text-cyan-500 font-bold dt"}>{props.place+", "+props.nation}</p>
            </div>
        </div>    
    </>
    );
}

export {Primary};