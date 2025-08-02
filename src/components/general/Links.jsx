import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

export const Links = ({style=null}) =>
    <div className={`${style?style:''} flex justify-center gap-3 cursor-pointer `}>
        <a href="https://www.linkedin.com/in/gracianohenrique/" target="_blank" rel="noopener noreferrer">
        <LinkedinIcon className="text-white w-8 h-8" />
        </a>
        <a href="https://github.com/Graciano1997/" target="_blank" rel="noopener noreferrer">
        <GithubIcon className="text-white w-8 h-8" />
        </a>
        <a href="mailto:gracianomanuelhenrique@gmail.com"><MailIcon className="text-white w-8 h-8" /></a>
        
        
    </div>