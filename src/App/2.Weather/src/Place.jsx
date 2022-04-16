import React from 'react';

const Loru = (props) => {

    return(
    <>
        <section className='w-full h-auto flex justify-start'>
            <div className='px-8 xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-xl'>
                <h1 className={props.tog?"":"text-violet-500"}>{`${props.place},${props.nation}`}</h1>
            </div>
        </section>
    </>
    );
}

export {Loru};