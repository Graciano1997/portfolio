import { CloudSun, LucideCloudSun, XIcon } from "lucide-react"
import { useRef, useState } from "react"

export const Search = ({searchingPlaceholder="Searching",style}) => {
    const [searching,setSearching]=useState(false);
    const inputRef= useRef(null);

    return (
        <div className={`h-12 w-[80%] 
        sm:w-[600px] 
        md:w-[600px] lg:w-[600px] 
        xl:w-[700px] text-white 
        flex items-center justify-between bg-white rounded-full  gap-1 
        ${style}
        `}>
           <input type="text"
           ref={inputRef}
           onChange={(element)=>{
            if(element.target.value=='')
                setSearching(false);
            else
                setSearching(true);

           }}
            placeholder={searchingPlaceholder} className="ml-2 h-10 w-[90%] rounded-full text-black p-5 outline-none" />
            {searching && (
                <button className="bg-black mr-2" onClick={()=>{
                    inputRef.current.value='';
                    setSearching(false);
                }}>
                <XIcon className="text-black w-5 h-5"/>
            </button>
            )}
        </div>
    )
}