import { ArrowRight, GithubIcon, Layers3Icon, LinkedinIcon, MailIcon, PointerIcon, SquareStack } from "lucide-react";
import gra from "../assets/gra.jpeg";
import { DocItem } from "./general/DocItem";
import { Time } from "./general/Time";
import { Title } from "./general/Title";

export const About=()=>{
    return(<>
    <Time/>
    <div className="h-100 w-100 sm:w-[100%]  fixed left-3 top-30">
        <Title title={'About Me'}/>
        <div className="h-[250px] w-[100%] mt-10 sm:mt-0 md:mt-10   sm:gap-5  sm:grid sm:grid-cols-[80fr_20fr] p-4">
           
            <div className="text-start w-[80%] text-white sm:mt-2 md:mt-1  h-50 flex flex-col justify-center p-1">
                <h2 className="text-xl">Fullstack Developer | React, Rails, NodeJs & Python | Open to Remote Work Worldwide.</h2>
                
                <p className="mt-3">I'm a full-stack web developer who loves building clean, user-friendly applications. With a sharp eye for detail and a problem-solving mindset,
                I aim to create fast, engaging web experiences. Let’s work together to bring your ideas to life!</p>
                
                <div className="flex sm:hidden fixed bottom-26 right-1 mt-1  justify-center gap-3 cursor-pointer">
                    <LinkedinIcon className="text-white w-8 h-8" />
                    <GithubIcon className="text-white w-8 h-8" />
                    <MailIcon className="text-white w-8 h-8" />
                </div>
                
                <div className="mt-4 sm:hiddn md:w-[100%] hidden md:flex items-center ">
                    <Layers3Icon className="text-white w-10 h-10" /> <ArrowRight className="text-white w-10 h-10"/>         
                <ul className="flex gap-2 flex-wrap">
                    <li>Ruby on Rails</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>NodeJS</li>
                    <li>Python</li>
                    <li>Mysql</li>
                    <li>PostgreeSql</li>
                    <li>PHP</li>
                </ul>
        </div>
            </div>
            
            <div className="hidden sm:flex flex-col items-center justify-center">
            <div className="flex h-50 w-50 sm:h-25 sm:w-25 md:h-25 md:w-25 xl:w-45 xl:h-45 ">
                <img className="w-[100%] h-[100%] rounded-full" src={gra} alt="Graciano Henrique" />
            </div>
            <div className="flex mt-2  justify-center gap-3 cursor-pointer">
                    <LinkedinIcon className="text-white w-8 h-8" />
                    <GithubIcon className="text-white w-8 h-8" />
                    <MailIcon className="text-white w-8 h-8" />

                </div>
            </div>
        </div>
    </div>
    </>);
};