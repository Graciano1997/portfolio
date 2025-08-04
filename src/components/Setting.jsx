import { Code2Icon, LanguagesIcon, ListFilter, MenuIcon, Paintbrush, PaintBucket, SunMoonIcon, WallpaperIcon } from "lucide-react";
import { Time } from "./general/Time";
import { Title } from "./general/Title";
import { ImageVisualizer } from "./ImageVisualizer";
import { wallpaper } from "../data/wallpaper";
import { setBackground } from "./Slices/themeSlice";
import { MobileMunu } from "./App/MobileMenu";
import { useRef, useState } from "react";
import { AppFooter } from "./general/AppFooter";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "./general/LanguageSelector";
import { firstCapitalize } from "../lib/firstCapitalize";

export const Setting=()=>{
    const [mobileMusicMenuIsOpen,setMobileMusicMenuIsOpen]=useState(false);
    const musicMobileRef=useRef(null);
    const musicMenuContainer=useRef(null);
    const {i18n,t}=useTranslation();
            
    return(<>
    <Time/>
    <button
            onClick={()=>{ 
             setMobileMusicMenuIsOpen(true);
            }}
            style={{background:'transparent'}}
            className="block md:hidden absolute text-red-500 
            text-2xl bg-white p-1 rounded shadow  left-[5px]
           top-[5px] transition-all duration-200 hover:bg-green-100">
            <MenuIcon className="w-10 h-10 text-white"/>
        </button>

    <div className="h-100 w-[98vw] fixed  flex justify-center md:grid md:grid-cols-[25fr_90fr] top-30 sm:top-3 md:top-25">
        <div className="mt-[4px] hidden md:block">
        <Title title={firstCapitalize(t('settings'))}/>
        <div className="ml-3  text-white h-[250px] mt-7 sm:mt-7 flex flex-wrap justify-between sm:gap-5">
            <ul className="flex flex-col gap-7">
                <li className="flex items-center gap-2"><LanguagesIcon className="text-white w-8 h-8" /> 
                <LanguageSelector/>
                 </li>
                <li className="flex items-center rounded gap-2"><WallpaperIcon className="text-white w-8 h-8" /> 
                {firstCapitalize(t('wallPaper'))}
                </li>
            </ul>
        </div>
        </div>
        <div className="w-[99%] h-[85%] sm:h-[85%] flex justify-center items-center">
            <div className="w-100">
                <ImageVisualizer dispatcher={setBackground} style={{background:'white', padding:'15px'}} images={wallpaper } />
            </div>
        </div>
    </div>
    
    {mobileMusicMenuIsOpen && (
    <div ref={musicMenuContainer} onClick={(el)=>{ el.stopPropagation(); if(el.target.contains(musicMobileRef.current)) setMobileMusicMenuIsOpen(false);}} className='md:hidden fixed w-[100%] h-[100%] top-[0] left-[0]' style={{zIndex:2100}} >    
    <div ref={musicMobileRef} className='w-[60%] h-[100%] bg-black/80 pt-2 flex flex-col items-center  gap-3' style={{zIndex:2500}} >
        <div className="flex items-center justify-center text-white  gap-2  rounded p-2">
        <LanguagesIcon className="w-8 h-8" /> 
        <LanguageSelector/>
        </div>
        <AppFooter icon={<Code2Icon className="w-8 h-8"/>} style={'absolute bottom-5 text-white text-center'}/>
</div>
    </div>)}
            
    </>);
};