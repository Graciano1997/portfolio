import { Time } from "./general/Time";

export const Docs=()=>{
    return(<>
    <Time/>
    <div className="h-100 w-100 sm:w-[50%]  fixed left-5 top-30">
        <h1 className="text-start text-white mt-3">My Docs</h1>
        <div className="h-[250px] mt-5 sm:mt-10 flex flex-wrap">
            <div className="bg-white rounded-full h-30 w-30 m-2 flex items-center cursor-pointer justify-center">
                Resume
            </div>
            <div className="bg-white rounded-full h-30 w-30 m-2 flex items-center cursor-pointer justify-center">
                CV
            </div>
            <div className="bg-white rounded-full h-30 w-30 m-2 flex items-center cursor-pointer justify-center ">
                Motivation
            </div>
        </div>
    </div>
    </>);
};