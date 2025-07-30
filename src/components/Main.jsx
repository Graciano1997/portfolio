import { Headline } from "./general/Headline"
import { MusicApp } from "./general/MusicApp"
import { Shortcut } from "./general/Shortcut"
import { Time } from "./general/Time"

export const Main=({visibilityControl})=>{
    return(<>
            <Time/>
            <Headline/>
            <Shortcut visibilityControl={visibilityControl}/>
    </>)
}