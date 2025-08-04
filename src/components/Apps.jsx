import { AppItem } from "./general/AppItem";
import { Search } from "./general/Search";
import { Projects } from "../data/Projects";
import { useState } from "react";
import { useSelector } from "react-redux";
import { firstCapitalize } from "../lib/firstCapitalize";
import { useTranslation } from "react-i18next";

export const Apps = () => {
    const [projects, setProjects] = useState(Projects());
    const appState = useSelector((state) => state.appState);
    const {t}=useTranslation()

    return (<>
        <Search dispatcher={setProjects} projects={projects} searchingPlaceholder={firstCapitalize(t('searchApp'))} style={'absolute top-5 sm:top-5'} />
        <div className=" h-[70vh] md:h-90 sm:h-[70vh] mt-19  md:h-[65vh] xl:h-[70vh] xl:mt-25 w-[100%] sm:w-[600px] md:w-[700px] lx:w-[900px]
     flex flex-wrap overflow-y-auto justify-center">
            {
            projects.length>0 && projects.map((project)=><AppItem project={project} icon={project.icon}/>)
            }

            {
                projects.length == 0 && appState.query != '' && appState.searching && (
                    <h2 className="text-white text-3xl mt-3">Could not find! </h2>
                )
            }

        </div>
    </>);
};