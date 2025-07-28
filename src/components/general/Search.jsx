import { CloudSun, LucideCloudSun, XIcon } from "lucide-react"

export const Search = () => {
    return (
        <div className="h-12 w-[80%] sm:w-[600px] md:w-[600px] lg:w-[600px] xl:w-[700px] text-white absolute
         top-5 sm:top-5   flex items-center justify-between bg-white rounded-full  gap-1 ">
           <input type="text" placeholder="Search for an App" className="ml-2 h-10 w-[90%] rounded-full text-black p-5 outline-none" />
            <button className="bg-black mr-2">
                <XIcon className="text-black w-5 h-5"/>
            </button>
        </div>
    )
}