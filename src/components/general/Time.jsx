import { CloudSun, LucideCloudSun } from "lucide-react"

export const Time = () => {
    return (
        <div className="text-white right-10  h-[70px] fixed top-10  flex   gap-1 ">
            <div className="flex flex-col ">
            <h1>15:16</h1>
            <h4>LUANDA</h4>
            </div>
            <LucideCloudSun className="h-10 w-10"/>
        </div>
    )
}