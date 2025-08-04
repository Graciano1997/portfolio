import { useState } from "react";
import { ProjectItem } from "../ProjectItem";

export const AppItem = ({icon, project})=>{
    const [isModalOpened,setIsModalOpened]=useState(false);
    return(
        <>
        <div onClick={()=>{setIsModalOpened(!isModalOpened)}} className="bg-white docItem rounded-full h-23 w-23 sm:w-26 sm:h-26 md:w-28 md:h-28 m-2 flex items-center 
        cursor-pointer 
        justify-center">
                {icon}
        </div>
        {isModalOpened && (<ProjectItem closeHandler={setIsModalOpened}  project={project}/>)}
        </>
    );
};
