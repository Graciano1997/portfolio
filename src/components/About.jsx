import { DocItem } from "./general/DocItem";
import { Time } from "./general/Time";
import { Title } from "./general/Title";

export const About=()=>{
    return(<>
    <Time/>
    <div className="h-100 w-100 sm:w-[50%]  fixed left-3 top-30">
        <Title title={'About Me'}/>
        <div className="h-[250px] mt-10 sm:mt-10 flex flex-wrap sm:gap-5">
            
        </div>
    </div>
    </>);
};