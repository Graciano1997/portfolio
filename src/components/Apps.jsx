import { ArrowLeft, ArrowLeftCircleIcon, ArrowRight, ArrowRightCircleIcon, BikeIcon, Biohazard, BiohazardIcon, BookAIcon, Calculator, GithubIcon, Layers3Icon, MusicIcon, RocketIcon, SquarePenIcon } from "lucide-react";
import { AppItem } from "./general/AppItem";
import { Search } from "./general/Search";
import projects from "../data/projectsData";
import { ProjectItem } from "./ProjectItem";
import { Projects } from "../data/Projects";

export const Apps=()=>{
    return(<>
    <Search searchingPlaceholder={'Search for an Application'} style={'absolute top-5 sm:top-5'}/>
    <div className=" h-[70vh] md:h-90 sm:h-[70vh] mt-19  md:h-[65vh] xl:h-[70vh] xl:mt-25 w-[100%] sm:w-[600px] md:w-[700px] lx:w-[900px]
     flex flex-wrap overflow-y-auto justify-center">
        {Projects().map((project)=><AppItem project={project} icon={project.icon}/>)}
    </div>
    {/* {false && (<ProjectItem project={projects[0]}/>)} */}
    </>);
};