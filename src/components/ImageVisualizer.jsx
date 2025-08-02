import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const ImageVisualizer = ({images, style={},dispatcher=()=>{}}) => {
    const imagesCount=images.length;    
    const [imageNumber,setImageNumber]=useState(0);
    const dispatch = useDispatch();

    const changeHandler =(element)=>{
        dispatch(dispatcher(element));
    }
 
    return (
        <div className="grid grid-cols-[5fr_90fr_5fr] gap-1">
            <div className="flex items-center justify-center">
                <button style={style}  onClick={()=>{
                    if(imageNumber>0){

                        if(changeHandler(images[imageNumber-1])){
                            setImageNumber(0);
                        }else{
                            setImageNumber(imageNumber-1);
                        }
                        console.log(imageNumber);
                    }
                }} 
                className="p-0 flex items-center justify-center rounded-full">
                    <ArrowLeft 
                    className={`w-5 h-5 ${imageNumber===0 || imagesCount===1 ? 'text-red-200':'text-black'}`} />
                </button></div>
            <div className="">
            {/* <div className="h-[50vh] w-[60vw]  sm:w-[70vw] sm:h-[70vh] md:w-100 md:h-100 "> */}
                <img style={{objectFit:'contain'}} src={images[imageNumber]} className="w-[100%] h-[100%] rounded-[20px] object-fit" alt="" />
            </div>
            <div className="flex items-center justify-center">
                <button
                style={style}
                onClick={()=>{
                    if(imageNumber<imagesCount-1 && imagesCount>0){
                        if(changeHandler(images[imageNumber+1])){
                            setImageNumber(0);
                        }else{
                            setImageNumber(imageNumber+1);
                        }
                        console.log(imageNumber);
                    }
                }}
                 className="p-0 flex items-center justify-center rounded-full">
                    <ArrowRight className={`w-5 h-5 ${imageNumber===imagesCount-1 || imagesCount===1 ? 'text-red-200':'text-black'}`} />
                </button>
            </div>
        </div>
    );
};