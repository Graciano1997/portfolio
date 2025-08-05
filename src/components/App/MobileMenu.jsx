import { MusicItem } from "../general/MusicItem";
import { useRef } from "react";
import { AppFooter } from "../general/AppFooter";
import { MathItem } from "../general/MathItem";
import { firstCapitalize } from "../../lib/firstCapitalize";
import { useTranslation } from "react-i18next";

export const MobileMunu = ({setOperationPlay=()=>{}, icon,menuType, musics=[],setPlaying=()=>{},musicToPlay=null,setMusicToPlay=()=>{},mobileMusicMenuIsOpen,setMobileMusicMenuIsOpen})=>{
    const musicMobileRef=useRef(null);
    const musicMenuContainer=useRef(null);
    const {t} =useTranslation();
    return(
        <>
        { mobileMusicMenuIsOpen && (<div ref={musicMenuContainer} onClick={(el)=>{ el.stopPropagation(); if(el.target.contains(musicMobileRef.current)) setMobileMusicMenuIsOpen(false);}} className='md:hidden fixed w-[100%] h-[100%] top-[0] left-[0]' style={{zIndex:2100}} >
        
        {menuType.music &&
        musics.length>0 && (
            <div ref={musicMobileRef} className='w-[50%] h-[100%] bg-black/70 pt-2 flex flex-col items-center gap-3 overflow-y-scroll' style={{zIndex:2500}} >
           {musics.map((item)=><MusicItem item={item} musicToPlay={musicToPlay} setPlaying={setPlaying} setMusicToPlay={setMusicToPlay} />)}
           <AppFooter icon={icon} style={'absolute bottom-5 text-white'}/></div>
           )
        }
        
        {menuType.math &&
            <div ref={musicMobileRef} className='w-[50%] h-[100%] bg-black/70 pt-2 flex flex-col items-center gap-3 overflow-y-scroll' style={{zIndex:2500}} >
            <MathItem operationToPlay={{IIgradEquation:true,IIEquationSys:false,IIIEquationSys:false}} item={{title: firstCapitalize(t('quadraticEquation'))}} setOperationPlay={setOperationPlay}  />
            <MathItem operationToPlay={{IIgradEquation:false,IIEquationSys:true,IIIEquationSys:false}} item={{title:firstCapitalize(t('systemTwoEquations'))}} setOperationPlay={setOperationPlay}  />
            <MathItem operationToPlay={{IIgradEquation:false,IIEquationSys:false,IIIEquationSys:true}} item={{title:firstCapitalize(t('systemThreeEquations'))}} setOperationPlay={setOperationPlay} />
        <AppFooter icon={icon} style={'absolute bottom-5 text-white'}/></div>
        }

        
        </div>)}
        </>
    );
};
