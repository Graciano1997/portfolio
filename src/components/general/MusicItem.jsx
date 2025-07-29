import { Music2Icon } from "lucide-react"

export const MusicItem=()=>{
    return(
        <div className="bg-[#3B82F6]/50 w-[95%] p-2 rounded cursor-pointer text-start grid grid-cols-[5fr_95fr] items-center gap-10 ">
                <Music2Icon className="w-10 h-10 text-white bg-black rounded-full p-2"/>
                <p className="text-[10px] sm:text-sm text-white">Move your Body Crish Brown</p>
                </div>
    )
}