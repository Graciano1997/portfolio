import { AppWindow, AppWindowIcon, AppWindowMac, AppWindowMacIcon, Cog, FileText, GripIcon, Laptop, LayoutGrid, LucideHome, Settings2, SettingsIcon, User, User2Icon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Menu = ()=>{
    const [isOpen,setIsOpen]=useState(false);
    const menuRef= useRef(null);


    const navegate=useNavigate();
     
    const navegateHandler=(path)=>{
         navegate(path);
         setIsOpen(false);
     };

        useEffect(()=>{
        const handlerClick=(event)=>{
            if(!((menuRef.current).contains(event.target))){ 
                setIsOpen(false); }else{
                   setIsOpen(!isOpen); 
                }
                event.stopPropagation();
        }
        
        window.addEventListener("click",handlerClick)

        return()=>{
            window.removeEventListener("click",handlerClick)
        }
    },[]);

    return(
        <>
        {/* <div className="bg-white w-[70px] h-[70px] fixed bottom-10 rounded-full flex justify-center items-center cursor-pointer">
            <LayoutGrid className="text-blue-650 h-10 w-10" />
        </div> */}
        
        <div ref={menuRef}  className={`${!isOpen?'w-[70px] h-[70px]':'w-[300px] sm:w-[50%] h-[60px]'} 
        bg-white fixed bottom-10 rounded-full 
        flex justify-around items-center
         cursor-pointer`}>
           {!isOpen?
           (<LayoutGrid className="text-blue-650 h-10 w-10"/>):
            (<>
            <LucideHome   onClick={()=>navegateHandler('/')}
            title="Application" className="color-red-200 h-10 w-10" />
 
            <AppWindowIcon
            onClick={()=>navegateHandler('/apps')}
            title="Application" className="color-red-200 h-10 w-10" />
            <User2Icon 
            onClick={()=>navegateHandler('/about')} className="color-red-200 h-10 w-10" />
            <FileText
            onClick={()=>navegateHandler('/docs')}
            className="color-red-200 h-10 w-10" />
            <SettingsIcon
            onClick={()=>navegateHandler('/setting')}
            className="color-red-200 h-10 w-10"  />
            </>)
            }
        </div>
        </>
    );
};

