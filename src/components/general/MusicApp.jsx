import { BarChart4, ChevronLeft, ChevronRight,HeartCrack,HeartIcon,HeartPlusIcon,HeartPulseIcon,LucideListMusic,Music2,Music3Icon,Music4Icon,MusicIcon,PauseCircleIcon, PlayCircleIcon} from "lucide-react";
import { MusicItem } from "./MusicItem";
import { Search } from "./Search";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import musics from "../../data/musicData";
import { MusicFooter } from "./musicFooter";

export const MusicApp = ()=>{
    const navegate=useNavigate();
    const musicMobileRef=useRef(null);
    const musicMenuContainer=useRef(null);
    const [playing,setPlaying]=useState(false);
    const audioRef=useRef(null);
    
    const [musicNumber,setMusicNumber]=useState(0);
    const musicCounter=musics.length;

    const [musicToPlay,setMusicToPlay]=useState(null);



    const [mobileMusicMenuIsOpen,setMobileMusicMenuIsOpen]=useState(false);
    
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
                <Search searchingPlaceholder={'Search for music title or Author'} style={'absolute top-18 md:top-30 '}/>
                <div className="flex gap-2 mt-10">
                    <button onClick={
                        ()=>{
                        if(musicNumber>0){
                        setMusicToPlay(musics[musicNumber-1]);
                        setMusicNumber(musicNumber-1);
                        setPlaying(true);
                        }
                        }
                    } style={{background:'transparent', outlineColor:'transparent'}}>
                        <ChevronLeft className="w-20 h-20 md:w-35 md:h-35  text-[#F1F5F9] cursor-pointer"/>
                        </button>
                    
                    {(playing) && (
                        <button onClick={()=>{
                            if(musicToPlay && !audioRef.current.paused){
                                audioRef.current.pause();
                                setPlaying(false);
                            }                            
                        }} style={{background:'transparent'}}><PauseCircleIcon className="text-[#F1F5F9] w-20 h-20 md:w-35 md:h-35  cursor-pointer"/></button>
                        )}


                    {(!playing) && (
                        <button
                         onClick={()=>{
                            if(musicToPlay){
                                audioRef.current.play();
                                setPlaying(true);
                            }
                            
                        }}
                        style={{background:'transparent'}}><PlayCircleIcon className="text-[#F1F5F9] w-20 h-20 md:w-35 md:h-35  cursor-pointer"/></button>
                    )
                }

                    <button
                    onClick={()=>{
                        if(musicNumber<musicCounter-1 && musicCounter>0){
                        setMusicToPlay(musics[musicNumber+1]);
                        setMusicNumber(musicNumber+1);
                        setPlaying(true);
                    }

                    }}
                    style={{background:'transparent'}}><ChevronRight className="text-[#F1F5F9] w-20 h-20 md:w-35 md:h-35 cursor-pointer"/></button>
                {musicToPlay && <audio ref={audioRef} src={musicToPlay.music} autoPlay></audio>}
                <MusicFooter style={'absolute bottom-5 left-5 text-white hidden md:flex '}/>
                </div>
              </div>
              <div className="hidden md:block bg-white/50 w-[2px] h-[100%]"></div>
              <div className="h-[100%] w-[100%] hidden  md:flex flex-col  items-center gap-3 text-white overflow-y-auto ml-2">
               {musics.map((item)=><MusicItem musicToPlay={musicToPlay} item={item} setPlaying={setPlaying} setMusicToPlay={setMusicToPlay} />)}
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
           {musics.map((item)=><MusicItem item={item} musicToPlay={musicToPlay} setPlaying={setPlaying} setMusicToPlay={setMusicToPlay} />)}
           <MusicFooter style={'absolute bottom-5 text-white'}/>
        </div>

        </div>
            )
        }
        </>
    );
};