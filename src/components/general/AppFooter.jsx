import { HeartIcon} from "lucide-react";

export const AppFooter = ({style, icon})=>
<p className={`flex justify-center gap-5 items-center ${style}`}>
    With <HeartIcon className="w-7 h-7 text-red-500"/> for {icon}</p>