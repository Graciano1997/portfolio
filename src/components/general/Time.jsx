import { LucideCloudSun } from "lucide-react"

export const Time = () => {
    return (
        <div className="text-white right-3  h-[70px] fixed top-5  flex   gap-1 ">
            <div className="flex flex-col ">
            <h1>15:16</h1>
            <h4>ANGOLA/LUANDA</h4>
            </div>
            <LucideCloudSun className="h-10 w-10"/>
        </div>
    )
}