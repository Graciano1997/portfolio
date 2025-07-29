import { BarChart4, ChevronLeft, ChevronRight,LucideListMusic,PauseCircleIcon, PlayCircleIcon} from "lucide-react";
import { MusicItem } from "./MusicItem";
import { Search } from "./Search";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export const MusicApp = ()=>{
    const navegate=useNavigate();
    const musicMobileRef=useRef(null);
    const musicMenuContainer=useRef(null);



    const [mobileMusicMenuIsOpen,setMobileMusicMenuIsOpen]=useState(false);

        //     useEffect(()=>{
        //     const mobileMusicMenuhandlerClick=(event)=>{
        //         if(!((musicMobileRef.current).contains(event.target))){ 
        //             setMobileMusicMenuIsOpen(false); }
        //             // else{
        //             //    setMobileMusicMenuIsOpenIsOpen(!mobileMusicMenuIsOpen); 
        //             // }
        //             event.stopPropagation();
        //     }
            
        //     window.addEventListener("click",mobileMusicMenuhandlerClick)
    
        //     return()=>{
        //         window.removeEventListener("click",mobileMusicMenuhandlerClick)
        //     }
        // },[]);
    
    return(
        <>
        <div className="w-[100%] h-[100%] top-0 left-0 blur-sm">
        </div>
        <div className='
        fixed bg-[#0F172A] w-[100%] h-[100%]
        top-[0] left-[0] 
        flex justify-center' style={{zIndex:2000}} >
         <button
         onClick={()=>{ 

            setMobileMusicMenuIsOpen(true);
        }}
        style={{background:'transparent'}}
          className="block md:hidden absolute text-red-500 
          text-2xl bg-white p-1 rounded shadow  left-[5px]
           top-[5px] transition-all duration-200 hover:bg-green-100"><LucideListMusic className="w-10 h-10 text-white"/></button>
         <button
         onClick={()=>{ 
          // dispatch(closeModal());
          // if(helper !=undefined){
          //   dispatch(helper());
          // }
          navegate('/');
        }}
          className="absolute text-red-500 
          text-2xl bg-white p-1 rounded shadow  right-[5px]
           top-[5px] transition-all duration-200 hover:bg-green-100">X</button>

            <div className=' mt-[4rem]  h-[85%]
             sm:h-[72vh] md:h-[87vh] xl:h-[87vh] md:overflow-y-auto shadow
             flex flex-col justify-center
             md:grid md:grid-cols-[80fr_2px_29fr] p-5'
              style={{zIndex:1000}}>

              <div className="flex flex-col items-center justify-center gap-3">
                {/* <Search searchingPlaceholder={'Search for music title or Author'} style={'absolute top-10 md:top-20 '}/> */}
                <div className="flex gap-2 mt-10">
                    <button style={{background:'transparent', outlineColor:'transparent'}}>
                        <ChevronLeft className="w-20 h-20 md:w-35 md:h-35  text-[#F1F5F9] cursor-pointer"/>
                        </button>
                    {/* <button style={{background:'transparent'}}><PauseCircleIcon className="text-[#F1F5F9] w-20 h-20 md:w-35 md:h-35  cursor-pointer"/></button> */}
                    <button style={{background:'transparent'}}><PlayCircleIcon className="text-[#F1F5F9] w-20 h-20 md:w-35 md:h-35  cursor-pointer"/></button>
                    {/* <div><PlayCircleIcon className="w-50 h-50"/></div> */}
                    <button style={{background:'transparent'}}><ChevronRight className="text-[#F1F5F9] w-20 h-20 md:w-35 md:h-35 cursor-pointer"/></button>
                </div>
              </div>
              <div className="hidden md:block bg-white/50 w-[2px] h-[100%]"></div>
              <div className="h-[100%] w-[100%] hidden  md:flex flex-col  items-center gap-3 text-white overflow-y-auto ml-2">
                <MusicItem/>
                <MusicItem/>
                <MusicItem/>
                <MusicItem/>
                <MusicItem/>
                <MusicItem/>
                <MusicItem/>
                <MusicItem/>
                <MusicItem/>
                <MusicItem/>
                <MusicItem/>
                <MusicItem/>
                <MusicItem/>
                </div>
            </div>
        </div>
        
        {
            mobileMusicMenuIsOpen && 
            (
                <div ref={musicMenuContainer} onClick={(el)=>{
                    el.stopPropagation();
                    if(el.target.contains(musicMobileRef.current)){
                        setMobileMusicMenuIsOpen(false);
                    }
                        
                }} className='md:hidden fixed w-[100%] h-[100%] top-[0] left-[0]' style={{zIndex:2100}} >
        
        <div ref={musicMobileRef} className='w-[70%] h-[100%] bg-black
        pt-2
        flex flex-col items-center gap-3 overflow-y-scroll' style={{zIndex:2500}} >
            <MusicItem/>
            <MusicItem/>
            <MusicItem/>
            <MusicItem/>
        </div>

        </div>
            )
        }
        </>
    );
};