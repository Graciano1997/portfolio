import { Calculator, Calendar, CloudIcon, CloudSunIcon, CloudSunRain, InfinityIcon, LucideOmega, Music, PiIcon, SquarePenIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"

export const Shortcut=({visibilityControl,setVisibilityControl})=>{
    const navegate = useNavigate();

    return(
    <div className="text-start text-white flex 
    absolute  right-5 bottom-30 sm:bottom-15 md:bottom-40 w-70 h-[70px] gap-10
    ">
    <SquarePenIcon 
    onClick={()=>{
        setVisibilityControl({...visibilityControl,editor:true});
    }}
    className="color-red-200 h-10 w-10 cursor-pointer"/>
    <CloudSunIcon 
      onClick={()=>{
        setVisibilityControl({...visibilityControl,weather:true});
    }}

    className="color-red-200 h-10 w-10 cursor-pointer"/>
    <Music onClick={()=>{
        setVisibilityControl({...visibilityControl,music:true});
    }}  className="color-red-200 h-10 w-10 cursor-pointer" />
    <PiIcon
    onClick={()=>{
        setVisibilityControl({...visibilityControl,mathApp:true});
    }}
    className="color-red-200 h-10 w-10 cursor-pointer"/>
    {/* <Calendar className="color-red-200 h-10 w-10 cursor-pointer"/> */}

    </div>
    )
}