import { AppWindow, AppWindowIcon, AppWindowMac, AppWindowMacIcon, Cog, FileText, GripIcon, Laptop, LayoutGrid, Settings2, SettingsIcon, User, User2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Menu = ()=>{
    const navegate=useNavigate();
    return(
        <>
        <div className="bg-white w-[70px] h-[70px] fixed bottom-10 rounded-full flex justify-center items-center cursor-pointer">
            <LayoutGrid className="text-blue-650 h-10 w-10" />
        </div>
        {/* <div className="bg-white w-[300px] sm:w-[50%] h-[60px] fixed bottom-10 rounded-full flex justify-around items-center cursor-pointer">
            <AppWindowIcon
            onClick={()=>navegate('/apps')}
             title="Application" className="color-red-200 h-10 w-10" />
            <User2Icon 
            onClick={()=>navegate('/about')} className="color-red-200 h-10 w-10" />
            <FileText
            onClick={()=>navegate('/docs')}
             className="color-red-200 h-10 w-10" />
            <SettingsIcon
            onClick={()=>navegate('/setting')}
             className="color-red-200 h-10 w-10"  />
        </div> */}
       
        </>
    );
};

