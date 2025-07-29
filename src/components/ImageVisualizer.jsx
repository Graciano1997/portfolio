import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

export const ImageVisualizer = ({images}) => {
    const imagesCount=images.length;    
    const [imageNumber,setImageNumber]=useState(0);

 
    return (
        <div className="grid grid-cols-[5fr_90fr_5fr] gap-0">
            <div className="flex items-center justify-center">
                <button onClick={()=>{
                    if(imageNumber>0){
                        setImageNumber(imageNumber-1);
                    }
                }} 
                className="p-0 flex items-center justify-center rounded-full">
                    <ArrowLeft 
                    className={`w-4 h-4 ${imageNumber===0 || imagesCount===1 ? 'text-red-200':'text-black'}`} />
                </button></div>
            <div className="h-[50vh] w-[60vw]  sm:w-[70vw] sm:h-[70vh] md:w-100 md:h-100 ">
                <img src={images[imageNumber]} className="w-[100%] h-[100%] rounded-[20px] object-fit" alt="" />
            </div>
            <div className="flex items-center justify-center">
                <button
                onClick={()=>{
                    if(imageNumber<imagesCount-1 && imagesCount>0){
                        setImageNumber(imageNumber+1);
                    }
                }}
                 className="p-0 flex items-center justify-center rounded-full">
                    <ArrowRight className={`w-4 h-4 ${imageNumber===imagesCount-1 || imagesCount===1 ? 'text-red-200':'text-black'}`} />
                </button>
            </div>
        </div>
    );
};