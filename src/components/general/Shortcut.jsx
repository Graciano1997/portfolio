import { Calculator, Calendar, CloudIcon, CloudSunIcon, CloudSunRain, Music, SquarePenIcon } from "lucide-react"

export const Shortcut=()=>{
    return(
    <div className="text-start text-white flex 
    absolute  right-5 bottom-30 sm:bottom-15 md:bottom-40 w-70 h-[70px] gap-10
    ">
    <SquarePenIcon className="color-red-200 h-10 w-10 cursor-pointer"/>
    <CloudSunIcon className="color-red-200 h-10 w-10 cursor-pointer"/>
    <Music className="color-red-200 h-10 w-10 cursor-pointer" />
    <Calculator className="color-red-200 h-10 w-10 cursor-pointer"/>
    <Calendar className="color-red-200 h-10 w-10 cursor-pointer"/>

    </div>
    )
}