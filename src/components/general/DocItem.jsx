import { useRef } from "react";

export const DocItem= ({name, item})=>{
    const linkRef = useRef(null);
    return(
        <div
        onClick={()=>{
            linkRef.current.click();
        }}
        className="docItem bg-white rounded-full h-25 w-25 sm:w-25 sm:h-25 md:w-30 md:h-30 m-2 flex items-center cursor-pointer justify-center text-[#0F172A]">
                {name}
                <a ref={linkRef} className="hidden" target="_blank" href={item}>Here</a>
            </div>
    );
};