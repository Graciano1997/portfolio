import { ArrowLeft, ArrowLeftCircleIcon, ArrowRight, ArrowRightCircleIcon, BikeIcon, Biohazard, BiohazardIcon, BookAIcon, Calculator, GithubIcon, Layers3Icon, MusicIcon, RocketIcon, SquarePenIcon } from "lucide-react";
import { AppItem } from "./general/AppItem";
import { Search } from "./general/Search";
import projects from "../data/projectsData";
import { ProjectItem } from "./ProjectItem";

export const Apps=()=>{
    return(<>
    <Search searchingPlaceholder={'Search for an Application'} style={'absolute top-5 sm:top-5'}/>
    <div className=" h-[70vh] md:h-90 sm:h-[70vh] sm:mt-3  md:h-[65vh] xl:h-[70vh] xl:mt-2 w-[100%] sm:w-[600px] md:w-[700px] lx:w-[900px]
     flex flex-wrap overflow-y-auto justify-center">
        <AppItem icon={<MusicIcon className="w-10 h-10 bg-white"/>}/>
        <AppItem icon={<h1 className="text-xl">H</h1>}/>
        <AppItem icon={<Calculator className="w-10 h-10 bg-white"/>}/>
        <AppItem icon={<BikeIcon className="w-10 h-10 bg-white"/>}/>
        <AppItem icon={<BiohazardIcon className="w-10 h-10 bg-white"/>}/>
        <AppItem icon={<RocketIcon className="w-10 h-10 bg-white"/>}/>
        <AppItem icon={<BookAIcon className="w-10 h-10 bg-white"/>}/>
        <AppItem icon={<SquarePenIcon className="w-10 h-10 bg-white"/>}/>
        <AppItem icon={<p className="text-xl">Budget</p>}/>
        <AppItem icon={<p className="text-md">Resting Countries</p>}/>
        {/* <AppItem icon={<p className="text-md">Ujama Bank</p>}/> */}
    </div>
    {false && (<ProjectItem project={projects[9]}/>)}
    </>);
};