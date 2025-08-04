import { ArrowRight, GithubIcon, Layers3Icon, LinkedinIcon, MailIcon, PointerIcon, SquareStack } from "lucide-react";
import gra from "../assets/gra.jpeg";
import { DocItem } from "./general/DocItem";
import { Time } from "./general/Time";
import { Title } from "./general/Title";
import { Links } from "./general/Links";
import { firstCapitalize } from "../lib/firstCapitalize";
import { useTranslation } from "react-i18next";

export const About=()=>{
    const {t}=useTranslation();
    return(<>
    <Time/>
    <div className="h-100 w-100 sm:w-[100%]  fixed left-3 top-30">
        <Title title={firstCapitalize(t('about'))}/>
        <div className="h-[250px] w-[100%] mt-10 sm:mt-0 md:mt-10 bg-black/30 rounded-[16px]  sm:gap-5  sm:grid sm:grid-cols-[80fr_20fr] p-1">
           
            <div className="text-start w-[90%] text-white sm:mt-2 md:mt-1  flex flex-col justify-center p-1">
                <h2 className="text-xl font-bold">{firstCapitalize(t('aboutHeader'))}</h2>
                
                <p className="mt-3">{firstCapitalize(t('aboutcontent'))}</p>
                
                <Links style={'sm:hidden fixed bottom-26 right-1 mt-1'}/>
                
                <div className="mt-4 sm:hiddn md:w-[100%] hidden md:flex items-center ">
                    <Layers3Icon className="text-white w-10 h-10" /> <ArrowRight className="text-white w-10 h-10"/>         
                <ul className="flex gap-2 flex-wrap">
                    <li>Ruby on Rails</li>
                    <li>NodeJS</li>
                    <li>Python</li>
                    <li>PHP</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Tailwind</li>
                    <li>Docker</li>
                    <li>Mysql</li>
                    <li>PostgreeSql</li>
                </ul>
        </div>
            </div>
            
            <div className="hidden sm:flex flex-col items-center justify-center">
            <div className="flex h-50 w-50 sm:h-25 sm:w-25 md:h-25 md:w-25 xl:w-45 xl:h-45 ">
                <img className="w-[100%] h-[100%] rounded-full" src={gra} alt="Graciano Henrique" />
            </div>
            <Links style={'mt-2'}/>
        </div>
        </div>
    </div>
    </>);
};