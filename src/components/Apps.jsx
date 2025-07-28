import { BikeIcon, Biohazard, BiohazardIcon, BookAIcon, Calculator, GithubIcon, Layers3Icon, MusicIcon, RocketIcon, SquarePenIcon } from "lucide-react";
import { AppItem } from "./general/AppItem";
import { Search } from "./general/Search";
import Modal from "./general/Modal";
import projects from "../data/projectsData";

export const Apps=()=>{
    return(<>
    <Search/>
    <div className=" h-[70vh] md:h-90 sm:h-[200px] md:h-[65vh] xl:h-[70vh] xl:mt-2 w-[100%] sm:w-[600px] md:w-[700px] lx:w-[900px]
     flex flex-wrap overflow-y-auto justify-center ">
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
        <AppItem icon={<p className="text-md">Ujama Bank</p>}/>
    </div>
    <Modal>
        <div className="flex flex-wrap md:grid md:grid-cols-[70fr_30fr]  h-[100%] p-3 gap-10">
            <div className="text-start">
              <h1 className="text-start">{projects[0].title}</h1>
              <p className="mt-10">{projects[0].content}</p>
              
              <div className="flex gap-2 items-center mt-2">
                <Layers3Icon className="text-black w-8 h-8" />
              <ul className="flex gap-2 mt-2">
                {projects[0].techLanguage.
                map(element =>
                <li className="text-light">{element}</li>)}
              </ul>
              </div>

              <div className="mt-2 flex gap-2 mt-4">
                <a href={projects[0].link[0]} className="text-light flex gap-3 items-center w-[100px] p-2 bg-blue-200 rounded-[16px]"><RocketIcon className="w-5 h-5"/>Visit</a>
                <a href={projects[0].link[1]} className="text-light flex gap-3 items-center w-[100px] p-2 bg-blue-200 rounded-[16px]"><GithubIcon className="w-5 h-5"/>Visit</a>
              </div>

            </div>
            <div className="">
                <div className="w-70 h-70 sm:w-70 sm:h-70 md:w-100 md:h-100 ">
                <img src={projects[0].image} className="w-[100%] h-[100%] rounded-[20px] object-fit" alt="" />
                </div>
            </div>

        </div>
    </Modal>
    </>);
};