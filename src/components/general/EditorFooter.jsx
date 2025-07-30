import { HeartIcon, MusicIcon } from "lucide-react";

export const MusicFooter = ({style})=>
<p className={`flex justify-center gap-5 items-center ${style}`}>
    With <HeartIcon className="w-7 h-7 text-red-500"/> for <MusicIcon className="w-7 h-7 text-white"/></p>