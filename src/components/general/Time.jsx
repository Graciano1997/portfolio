import { LucideCloudSun, LucideMoon } from "lucide-react"
import { useState } from "react";

export const Time = () => {
    const [time,setTime]=useState({hour:0,minutes:0});
    
    setInterval(()=>{
        const date= new Date();
        setTime({hour:date.getHours(),minutes:date.getMinutes()});
    },1000);
    return (
        <div className="text-white right-3  h-[70px] fixed top-5  flex   gap-1 ">
            <div className="flex flex-col ">
            <h1>{`${time.hour >=10? time.hour :`0${time.hour}` }:${time.minutes >=10? time.minutes :`0${time.minutes}` }`}</h1>
            <h4>ANGOLA/LUANDA</h4>
            </div>
            {(time.hour >=6 && time.hour<18) ? <LucideCloudSun className="h-10 w-10"/> :<LucideMoon className="h-10 w-10" />}
        </div>
    )
}