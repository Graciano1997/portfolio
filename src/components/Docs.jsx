import { DocItem } from "./general/DocItem";
import { Time } from "./general/Time";
import { Title } from "./general/Title";

export const Docs=()=>{
    return(<>
    <Time/>
    <div className="h-100 w-100 sm:w-[50%]  fixed left-3 top-30 sm:top-25 md:top-30">
        <Title title={'My Docs'}/>
        <div className="h-[250px] mt-10 sm:mt-2 md:mt-10 flex  md:gap-3">
            <DocItem name={"Résumé"}/>
            <DocItem name={"CV"}/>
            <DocItem name={"Motivation"}/>
        </div>
    </div>
    </>);
};

