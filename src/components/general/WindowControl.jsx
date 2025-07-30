import { Minus } from "lucide-react"

export const WindowControls =({minimizeHandler=()=>{},closeHandler=()=>{}})=>{
    return(
    <>
    <button
         onClick={()=>{
            closeHandler();
                // setMusicToPlay(null);
                // setVisibilityControl(false);
            }}
            className="absolute text-red-500 
            text-2xl bg-white p-1 rounded shadow  right-[5px]
            top-[5px] transition-all duration-200 hover:bg-green-100">X</button>
         <button
         style={{background:'transparent'}}
         onClick={()=>{ 
            minimizeHandler()
            }}
            className="absolute text-red-500 
            text-2xl bg-white p-1 rounded shadow  right-20
            top-[5px] transition-all duration-200 hover:bg-green-100">
            <Minus className="w-5 h-5 text-white"/>
           </button>
               </>);
} 