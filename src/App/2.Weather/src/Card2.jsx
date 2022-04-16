import React,{useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import "../css/card.css";
import { Time } from './Time';
import { Primary } from './Primary';
import { Secondary } from './Secondary';
import { Day } from './day';
import { Loru } from './Place';

const Card2 = (props) => {

    const [search,setSearch] = useState("palta");
    const [dn, setDn] = useState("");
    const [icon , setIcon] = useState("");
    const [on,toggleOn] = useState(true);
    const [show, toggleShow] = useState(false);

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday"];
    let day = new Date().getDay();
    const weatherInfo = () => {
        props.btn(search);
        day = new Date().getDay();
    }
    useEffect(() =>{
        weatherInfo()
    },[]);

    const dayNight = props.info1[9]
    const mood=props.info1[5]
    useEffect(() =>
    {
        if(dayNight == "d")
        {
            setDn("w-full h-auto day");
            toggleOn(true);
            if(mood){
                switch (mood) {
                    case "Clouds":
                        setIcon("wi wi-day-cloudy");
                        break;
                    case "Haze":
                        setIcon("wi wi-day-haze");
                        break;
                    case "Clear":
                        setIcon("wi wi-horizon-alt");
                        break;
                    case "Tornado":
                        setIcon("wi wi-tornado");
                        break;
                    case "Sand":
                        setIcon("wi wi-cloudy-gusts");
                        break;
                    case "Rain" :
                        setIcon("wi wi-day-rain-mix");
                        break;
                    case "Snow" : 
                        setIcon("wi wi-day-snow-wind");
                        break;
                    case "Fog" : 
                        setIcon("wi wi-day-fog");
                        break;
                    case "Dust" : 
                        setIcon("wi wi-dust");
                        break;
                    case "Smoke" : 
                        setIcon("wi wi-smoke");
                        break;
                    case "Mist" : 
                        setIcon("wi wi-day-showers");
                        break;
                    case "Drizzle" : 
                        setIcon("wi wi-day-storm-showers");
                        break;
                    case "Thunderstorm" : 
                        setIcon("wi wi-day-thunderstorm");
                        break;
                    default:
                        setIcon("wi wi-hot");
                    break;
                }
            }
        }
        if(dayNight == "n")
        {
            setDn("w-full h-auto night");
            toggleOn(false);
            if(mood){
                switch (mood) {
                    case "Clouds":
                        setIcon("wi wi-night-alt-cloudy");
                        break;
                    case "Haze":
                        setIcon("wi wi-night-alt-cloudy-windy");
                        break;
                    case "Clear":
                        setIcon("wi wi-night-clear");
                        break;
                    case "Tornado":
                        setIcon("wi wi-tornado");
                        break;
                    case "Sand":
                        setIcon("wi wi-cloudy-gusts");
                        break;
                    case "Rain" :
                        setIcon("wi wi-night-rain");
                        break;
                    case "Snow" : 
                        setIcon("wi wi-night-snow-wind");
                        break;
                    case "Fog" : 
                        setIcon("wi wi-night-fog");
                        break;
                    case "Dust" : 
                        setIcon("wi wi-dust");
                        break;
                    case "Smoke" : 
                        setIcon("wi wi-smoke");
                        break;
                    case "Mist" : 
                        setIcon("wi wi-night-showers");
                        break;
                    case "Drizzle" : 
                        setIcon("wi wi-night-storm-showers");
                        break;
                    case "Thunderstorm" : 
                        setIcon("wi wi-night-thunderstorm");
                        break;
                    default:
                        setIcon("wi wi-night-alt-partly-cloudy");
                    break;
                }
            }
        }
    },[mood,dayNight])

    return(
    <>
        <section className='h-auto w-full absolute top-28 flex justify-center items-center'>
            <div className={show?"hidden":'rounded-lg overflow-hidden shadow-2xl shadow-gray-800 h-auto xl:w-2/5 lg:w-1/2 md:w-9/12 sm:w-11/12 w-11/12 bg-slate-200 xl:m-0 lg:m-0 md:m-7 sm:m-8'}>
             {/* HL1     search   */}
                <div className='w-full inline-flex justify-center pt-6  pb-4'>
                    <TextField id="outlined-basic" label="Place Name" variant="outlined" className='mx-2' required
                        value={search}
                        onChange={(e) => {setSearch(e.target.value)}}
                    />
                    <Button variant="outlined" startIcon={<SearchIcon />} onClick={weatherInfo}>
                        Search
                    </Button>
                </div>
                <div className={dn} layout="responsive">
                    {/* HL2     icon       */}
                    <div className='h-auto w-full flex justify-center px-6 pb-4 text-8xl pt-14 animate-pulse'>
                        <i className={on?`text-indigo-600 ${icon}`:`text-teal-400 ${icon}`}></i>
                    </div>
                    {/* HL4     deatils     */}
                    <div className='h-auto w-full grid col-span-2'>
                        <Time tog={on}  timezone={props.other[2]}/>
                        <Primary tog={on}
                            temp={props.info1[0]}
                            weather={props.info1[6]}
                            place={props.other[0]}
                            nation={props.other[1]}/>
                    </div>
                    {/* HL5   Specific       */}
                    <Secondary tog={on}
                        min={props.info1[1]}
                        max={props.info1[2]}
                        hum={props.info1[4]}
                        press={props.info1[3]}
                        speed={props.info1[7]}
                        gust={props.info1[8]} />

                    <div className={on?'w-full h-auto flex justify-center bg-slate-900 bg-opacity-10 pb-1':'w-full h-auto flex justify-center bg-slate-100 bg-opacity-10 pb-1'} onClick={() => toggleShow(!show)}>
                        <button  
                            className='text-pink-600'>How about next days? <CompareArrowsIcon/></button>
                    </div>
                </div>
            </div>
            {/* HL1         2nd part */}
            <div className={show?'rounded-lg overflow-hidden shadow-2xl shadow-gray-900 h-auto xl:w-2/5 lg:w-1/2 md:w-9/12 sm:w-11/12 w-11/12 bg-slate-200 xl:m-0 lg:m-0 md:m-7 sm:m-8':"hidden"}>
                <div className={dn} layout="responsive">
                    <div className={on?'w-full h-auto flex justify-center bg-slate-900 bg-opacity-10 py-1':'w-full h-auto flex         justify-center bg-slate-100 bg-opacity-10 pt-1'}>
                        <h1 className='text-pink-600'>Next two days..</h1>
                    </div>

                    <div className='w-full h-auto flex justify-start flex-col py-4'>
                    
                        <Loru place={props.other[0]} nation={props.other[1]}/>
                        <Day tog={on}
                            bar={weekday[day+1]}
                            temp={props.info2[0]} min={props.info2[1]} max={props.info2[2]}
                            hum={props.info2[4]} press={props.info2[3]}
                            speed={props.info2[6]} gust={props.info2[7]} deg={props.info2[8]} cloud={props.info2[9]}
                            weather={props.info2[5]} vis={props.info2[10]}
                            update={props.info2[11]} />
                    
                        <Day tog={on}
                            bar={weekday[day+2]}
                            temp={props.info3[0]} min={props.info3[1]} max={props.info3[2]}
                            hum={props.info3[4]} press={props.info3[3]}
                            speed={props.info3[6]} gust={props.info3[7]} deg={props.info3[8]} cloud={props.info3[9]}
                            weather={props.info3[5]} vis={props.info3[10]} 
                            update={props.info3[11]} />
                    </div>
                    <div className={on?'w-full h-auto flex justify-center bg-slate-900 bg-opacity-10 pb-1':'w-full h-auto flex         justify-center bg-slate-100 bg-opacity-10 pb-1'} onClick={() => toggleShow(!show)}>
                        <button  
                            className='text-pink-600'>Back <CompareArrowsIcon/> </button>
                    </div>
                </div>
            </div>    
        </section>
    </>
    );
}

export {Card2};