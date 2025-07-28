import { LanguagesIcon, Paintbrush, PaintBucket, SunMoonIcon, WallpaperIcon } from "lucide-react";
import { DocItem } from "./general/DocItem";
import { Time } from "./general/Time";
import { Title } from "./general/Title";

export const Setting=()=>{
    return(<>
    <Time/>
    <div className="h-100 w-100 sm:w-[50%]  fixed left-3 top-30">
        <Title title={'Settings'}/>
        <div className="ml-3  text-white h-[250px] mt-10 sm:mt-10 flex flex-wrap sm:gap-5">
            <ul className="flex flex-col gap-10">
                <li className="flex items-center gap-2"><SunMoonIcon className="text-white w-8 h-8" /> 
                <select className=" w-[100px]">
                    <option value="">Light</option>
                    <option value="">Dark</option>
                    </select>
                </li>
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
    </>);
};