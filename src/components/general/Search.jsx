import { SearchIcon, XIcon } from "lucide-react"
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setQuery, setSearching } from "../Slices/appSlice";

export const Search = ({dispatcher, searchingPlaceholder="Searching",style}) => {
    
    const inputRef= useRef(null);
    const dispatch = useDispatch();
    const appState=useSelector((state)=>state.appState);
    
    return (
        <div className={`h-12 w-[80%] 
        sm:w-[600px] 
        md:w-[600px] lg:w-[600px] 
        xl:w-[700px] text-white 
        flex items-center justify-between bg-white rounded-full  gap-1 
        ${style}
        `}>
           <input type="text"
           ref={inputRef}
           onChange={(element)=>{
            if(element.target.value==''){
                dispatch(setSearching(false));
                dispatch(setQuery(''));
            }else{
                dispatch(setQuery(element.target.value));
                dispatch(setSearching(true));
            }
           }}
           value={appState.query}
            placeholder={searchingPlaceholder}
            defaultValue={appState.query}
            className="ml-2 h-10 w-[90%] rounded-full text-black p-5 outline-none" />
            {appState.searching && (
                <>
                <button onClick={()=>{dispatcher()}}><SearchIcon className="w-5 w-5 text-black "/></button>
                <button className="bg-black mr-2" onClick={()=>{
                    inputRef.current.value='';
                    dispatch(setQuery(''));
                    dispatch(setSearching(false));
                }}>
                <XIcon className="text-black w-5 h-5"/>
            </button>
                </>
            )}
        </div>
    )
}