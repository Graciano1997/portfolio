import { WindowControls } from "../general/WindowControl";

export const AppDesign = ({children, style,closeHandler,minimizeHandler})=>{
    
    return(
        
        <div className={`${style}`} style={{transition:'2s ease'}} >
        <div className="w-[100%] h-[100%] top-0 left-0 blur-sm">
        </div>
         <div className='fixed bg-[#0F172A]/80 w-[100%] h-[100%] top-[0] left-[0] flex justify-center' style={{zIndex:2000}} >
        <WindowControls closeHandler={closeHandler} minimizeHandler={minimizeHandler} />
        {children}
        </div>
        </div>
    );
};