
export const MathItem=({item,operationToPlay,setOperationPlay})=>{
    return(
        <button onClick={()=>{
        setOperationPlay(operationToPlay)
        
        }}  style={{backgroundColor:'#0000', }} className= {`w-[100%] p-2 text-white rounded cursor-pointer text-start `}>
            {item.title}
        </button>
        // <div onClick={()=>{
        //     // setMusicToPlay(item);
        //     // setPlaying(true);
        // }} 
        // className= {`${item.music==musicToPlay?.music?'bg-white/70':'bg-[#3B82F6]/50'} w-[95%] p-2 rounded cursor-pointer text-start grid grid-cols-[5fr_95fr] items-center gap-10 `}>
        //         <p className="text-[10px] sm:text-sm text-white">{item.title}</p>
        //         </div>
    )
}