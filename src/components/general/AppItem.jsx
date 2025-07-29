export const AppItem = ({icon})=>{
    return(
        <div className="bg-white rounded-full h-23 w-23 sm:w-26 sm:h-26 md:w-28 md:h-28 m-2 flex items-center 
        cursor-pointer 
        justify-center">
                {icon}
        </div>
    );
};
