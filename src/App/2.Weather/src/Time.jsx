import React,{useState} from 'react';
import "../css/card.css";

const Time = (props) => {

    let [time,setTime]=useState(new Date().toLocaleTimeString());
    let [date,setDate]=useState(new Date().toLocaleDateString());

    let next = () =>{
        let curr = new Date().toLocaleTimeString();
        setTime(curr);
    }
    let next2 = () =>{
        let curr2 = new Date().toLocaleDateString();
        setDate(curr2);
    }
    setInterval(next2,3600000)
    setInterval(next,1000);

    return(
    <>
        <div className='h-auto w-full xl:px-10 lg:px-10 md:px-4 sm:px-4 px-4 pt-6 pb-0 flex justify-center flex-col'>
            <p className={props.tog?"text-sm text-pink-400":"text-sm text-rose-400"}>Date And Time:</p>
            <div className={props.tog?"w-full h-auto flex flex-col":"w-full h-auto flex flex-col text-rose-200"}>
                <h1 className='text-2xl dt xl:pl-6 lg:pl-6 md:pl-4 sm:pl-0 pl-0'>{date}</h1>
                <h1 className='text-2xl dt xl:pl-6 lg:pl-6 md:pl-4 sm:pl-0 pl-0'>{time}</h1>
            </div>
        </div>
        
    </>
    );
}

export {Time};