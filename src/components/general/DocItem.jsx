export const DocItem= ({name})=>{
    return(
        <div className="docItem bg-white rounded-full h-25 w-25 sm:w-25 sm:h-25 md:w-30 md:h-30 m-2 flex items-center cursor-pointer justify-center">
                {name}
            </div>
    );
};