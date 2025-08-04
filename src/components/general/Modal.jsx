const Modal = ({children,closeHandler=()=>{} })=>{

    return(
        <>
        <div className="flex items-center">
        <div className="w-[100%] h-[100%] top-0 left-0 blur-sm">
        </div>
        <div className='
        fixed bg-black/30 w-[100%] h-[100%]
        top-[0] left-[0] 
        flex justify-center' style={{zIndex:2000}} >
         <button
        onClick={()=>{ 
          closeHandler();
        }}
        
          className="absolute text-red-500 
          text-2xl bg-white p-1 rounded shadow  right-[15px]
           top-[20px] transition-all duration-200 hover:bg-green-100">X</button>
            <div className='p-3 mt-[5rem] bg-white  w-[90%] h-[85%] sm:h-[74vh] md:h-[75vh] xl:h-[80vh] overflow-y-auto rounded-[30px] shadow' style={{zIndex:1000}}>
              {children} 
            </div>
        </div>
        </div>
    </>
    );
};

export default Modal;
