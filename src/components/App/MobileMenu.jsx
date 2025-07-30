import { MusicItem } from "../general/MusicItem";
import { useRef } from "react";
import { AppFooter } from "../general/AppFooter";
import { MusicIcon } from "lucide-react";

export const MobileMunu = ({musics=[],setPlaying=()=>{},musicToPlay=null,setMusicToPlay=()=>{},mobileMusicMenuIsOpen,setMobileMusicMenuIsOpen})=>{
    const musicMobileRef=useRef(null);
    const musicMenuContainer=useRef(null);
    
    return(
        <>
        { mobileMusicMenuIsOpen && (<div ref={musicMenuContainer} onClick={(el)=>{ el.stopPropagation(); if(el.target.contains(musicMobileRef.current)) setMobileMusicMenuIsOpen(false);}} className='md:hidden fixed w-[100%] h-[100%] top-[0] left-[0]' style={{zIndex:2100}} >
        
        {musics.length>0 && (
            <div ref={musicMobileRef} className='w-[70%] h-[100%] bg-black pt-2 flex flex-col items-center gap-3 overflow-y-scroll' style={{zIndex:2500}} >
           {musics.map((item)=><MusicItem item={item} musicToPlay={musicToPlay} setPlaying={setPlaying} setMusicToPlay={setMusicToPlay} />)}
           <AppFooter icon={<MusicIcon className="w-7 h-7 text-white"/>} style={'absolute bottom-5 text-white'}/></div>
           )
           }
        </div>)}
        </>
    );
};
