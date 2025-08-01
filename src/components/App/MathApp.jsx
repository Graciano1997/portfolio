import {  DivideIcon, EqualIcon, InfinityIcon, LucideOmega, MenuIcon,PiIcon, WholeWordIcon} from "lucide-react";

import { useRef, useState } from "react";
import { AppFooter } from "../general/AppFooter";
import { AppDesign } from "./AppDesign";
import { MobileMunu } from "./MobileMenu";
import { MathItem } from "../general/MathItem";
import { Equation2Grad } from "./Equation2Grad";
import { useDispatch } from "react-redux";
import { cleanAll } from "../Slices/mathSlice";
import { Equation2Sys } from "./Equation2Sys";
import { Equation3Sys } from "./Equation3Sys";

export const MathApp = ({style,setVisibilityControl,visibilityControl})=>{
    const dispatch = useDispatch();

    const [operationToPlay,setOperationPlay]=useState({IIgradEquation:false,IIEquationSys:false,IIIEquationSys:false});
    const [mobileMusicMenuIsOpen,setMobileMusicMenuIsOpen]=useState(false);
    
    return(
        <>
        <AppDesign setMobileMusicMenuIsOpen={setMobileMusicMenuIsOpen} style={style} closeHandler={()=>{ 
            dispatch(cleanAll());
            setVisibilityControl({...visibilityControl,mathApp:false});}} minimizeHandler={()=>{setVisibilityControl({...visibilityControl,mathApp:false});}}>
            <div className=' mt-[4rem]  h-[85%]
             sm:h-[72vh] md:h-[87vh] xl:h-[87vh] md:overflow-y-auto shadow
             flex flex-col justify-center
             md:grid md:grid-cols-[84fr_2px_14fr] p-5'
              style={{zIndex:1000}}>
            <button
            onClick={()=>{ 
             setMobileMusicMenuIsOpen(true);
            }}
            style={{background:'transparent'}}
            className="block md:hidden absolute text-red-500 
            text-2xl bg-white p-1 rounded shadow  left-[5px]
           top-[5px] transition-all duration-200 hover:bg-green-100">
            <MenuIcon className="w-10 h-10 text-white"/>
            </button>

              <div className="flex flex-col items-center justify-center gap-3">
                <div className="flex gap-2 mt-10">
                    {
                        operationToPlay.IIgradEquation && (
                            <Equation2Grad/> 
                        )
                    }
                    {
                        operationToPlay.IIEquationSys && (
                            <Equation2Sys/>  
                        )
                    }
                    {
                        operationToPlay.IIIEquationSys && (
                            <Equation3Sys/>   
                        )
                    }

                    {
                        (!operationToPlay.IIgradEquation &&
                        !operationToPlay.IIEquationSys &&
                        !operationToPlay.IIIEquationSys) &&(
                            <h2 className="text-white flex flex-wrap items-center justify-center gap-2 text-3xl">Welcome at Math Essentials<InfinityIcon className="w-8 h-8 text-white"/><LucideOmega className="w-8 h-8 text-white"/><PiIcon className="w-8 h-8 text-white"/><EqualIcon className="w-8 h-8 text-white"/><DivideIcon className="w-8 h-8 text-white"/></h2>
                        )

                    }
      
                <AppFooter icon={<PiIcon className="w-7 h-7 text-white"/>} style={'absolute bottom-5 left-5 text-white hidden md:flex'}/>
                </div>
              </div>
              <div className="hidden md:block bg-white/50 w-[2px] h-[100%]"></div>
              <div className="h-[100%] w-[100%] hidden  md:flex flex-col  items-center gap-3 text-white overflow-y-auto ml-2">
               <MathItem operationToPlay={{IIgradEquation:true,IIEquationSys:false,IIIEquationSys:false}} item={{title:'II Grad Equation'}} setOperationPlay={setOperationPlay}  />
               <MathItem operationToPlay={{IIgradEquation:false,IIEquationSys:true,IIIEquationSys:false}} item={{title:'II Equation System'}} setOperationPlay={setOperationPlay}  />
               <MathItem operationToPlay={{IIgradEquation:false,IIEquationSys:false,IIIEquationSys:true}} item={{title:'III Equation System'}} setOperationPlay={setOperationPlay} />
                </div>
            </div>
        <MobileMunu menuType={{music:false,math:true}} 
        icon={<PiIcon className="w-7 h-7 text-white"/>} 
        mobileMusicMenuIsOpen={mobileMusicMenuIsOpen} 
        setMobileMusicMenuIsOpen={setMobileMusicMenuIsOpen}
        setOperationPlay={setOperationPlay}

        />
        </AppDesign>
        </>
    );
};
