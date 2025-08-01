import { LanguagesIcon, Paintbrush, PaintBucket, SunMoonIcon, WallpaperIcon } from "lucide-react";
import { Time } from "./general/Time";
import { Title } from "./general/Title";
import { ImageVisualizer } from "./ImageVisualizer";
import { wallpaper } from "../data/wallpaper";
import { setBackground } from "./Slices/themeSlice";
import { useSelector } from "react-redux";

export const Setting=()=>{
    const theme = useSelector((state)=>state.themeState);
    
    return(<>
    <Time/>
    <div className="h-100 w-[98vw] fixed left-3 grid grid-cols-[25fr_90fr] flex justify-between top-27">
        <div className="mt-[4px]">
        <Title title={'Settings'}/>
        <div className="ml-3  text-white h-[250px] mt-7 sm:mt-7 flex flex-wrap justify-between sm:gap-5">
            <ul className="flex flex-col gap-7">
                <li className="flex items-center gap-2"><LanguagesIcon className="text-white w-8 h-8" /> 
                <select className=" w-[100px]">
                    <option value="">Portugues</option>
                    <option value="">Ingles</option>
                    </select>
                </li>
                <li className="flex items-center rounded gap-2"><WallpaperIcon className="text-white w-8 h-8" /> 
                WallPaper
                </li>
            </ul>
        </div>
        </div>
            <div className=" h-100 flex justify-center">
                <div className="w-100">
                <ImageVisualizer dispatcher={setBackground} style={{background:'white', padding:'15px'}} images={wallpaper} />
                </div>
            </div>
    </div>
    </>);
};