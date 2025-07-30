import { Headline } from "./general/Headline"
import { Shortcut } from "./general/Shortcut"
import { Time } from "./general/Time"

export const Main=({visibilityControl,setVisibilityControl})=>{
    return(<>
            <Time/>
            <Headline/>
            <Shortcut visibilityControl={visibilityControl} setVisibilityControl={setVisibilityControl}/>
    </>)
}