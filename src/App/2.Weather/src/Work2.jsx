import React,{useState} from 'react';
import { Card2 } from './Card2';

const Work2 = () => {
    const [info1 , setInfo1] = useState("");
    const [info2 , setInfo2] = useState("");
    const [info3 , setInfo3] = useState("");
    const [other, setOther] = useState("");
    

    const fnc = async (city) => {

        try{
            
            let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=3&appid=${process.env.REACT_APP_KEY2}`;
    
            const res = await fetch(url);
            const data = await res.json();

            //Hl2           other info          
            const{name,country,timezone} = data.city;
            setOther([name,country,(timezone/3600)]);
        
            
            //HL5            day 0              
            const {main: main1,wind: wind1,sys: sys1} =data.list[0];
            
            const temp1=main1.temp;
            const min1=main1.temp_min;
            const max1=main1.temp_max;
            const pressure1=main1.pressure;
            const humidity1=main1.humidity;
            const {main: type1 }=data.list[0].weather[0];
            const {description: des1 }=data.list[0].weather[0];
            const speed1=wind1.speed;
            const gust1=wind1.gust;
            const dn=sys1.pod;
        
            // const data1= [main,wind,sys,dt_txt]
            // setInfo1(data1);
            const myData1 = [temp1,min1,max1,pressure1,humidity1,type1,des1,speed1,gust1,dn];
            setInfo1(myData1);
            //console.log(info1)

            //HL1       day1                    
            const {main: main2,wind: wind2,clouds: clouds2,visibility: visibility2} =data.list[1];
            
            const temp2=main2.temp;
            const min2=main2.temp_min;
            const max2=main2.temp_max;
            const pressure2=main2.pressure;
            const humidity2=main2.humidity;
            const {description: des2 }=data.list[1].weather[0];
            const speed2=wind2.speed;
            const gust2=wind2.gust;
            const deg2=wind2.deg;
            const cloud2=clouds2.all;
            let vis2=visibility2;
            (vis2>=10000)?vis2='>10Km':vis2=(vis2/1000)+"Km";

            const myData2 = [temp2,min2,max2,pressure2,humidity2,des2,speed2,gust2,deg2,cloud2,vis2];
            setInfo2(myData2);
           // console.log(info2)
            


            //Hl4       day2                       
            const {main: main3,wind: wind3,clouds: clouds3,visibility: visibility3} =data.list[2];
            
            const temp3=main3.temp;
            const min3=main3.temp_min;
            const max3=main3.temp_max;
            const pressure3=main3.pressure;
            const humidity3=main3.humidity;
            const {description: des3 }=data.list[2].weather[0];
            const speed3=wind3.speed;
            const gust3=wind3.gust;
            const deg3=wind3.deg;
            const cloud3=clouds3.all;
            let vis3 = visibility3;       
            (vis3>=10000)?vis3='>10Km':vis3=(vis3/1000)+"Km";

            const myData3 = [temp3,min3,max3,pressure3,humidity3,des3,speed3,gust3,deg3,cloud3,vis3];
            setInfo3(myData3);
            //console.log(info3)
            
        }
        catch(error){
            console.log(error);
            alert("Invalid City 💩")
        } 
        
    }

    return(
    <>
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 text-center mt-4"> Weather Ji Ji</h1>
        <Card2 
            info1={info1}
            info2={info2}
            info3={info3}
            btn={fnc}
            other={other}
            />
        <h1 className='text-center text-lg '>&copy;<span className="txt">By Moiank Majumdar</span>🤕</h1>
    </>
    );
}



export {Work2};