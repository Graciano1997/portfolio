import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const ImageVisualizer = ({images, style={},dispatcher=null}) => {
    const imagesCount=images.length;    
    const [imageNumber,setImageNumber]=useState(0);
    const dispatch = useDispatch();
    const [visible,setVisible]=useState(true);

    const changeHandler =(element)=>{
        dispatch(dispatcher(element));
    }
 
    return (
        <div className="grid grid-cols-[5fr_90fr_5fr] gap-1 items-center">
            <div className="flex items-center justify-center">
                <button style={style}  onClick={()=>{
                    if(imageNumber>0){
                        if(dispatcher){
                            changeHandler(images[imageNumber-1]);
                        }
                        setImageNumber(imageNumber-1);
                        setVisible(false);
                        setTimeout(()=>{
                            setVisible(true);
                        },10)
                    }
                }} 
                className="p-0 flex items-center justify-center rounded-full">
                    <ArrowLeft 
                    className={`w-5 h-5 ${imageNumber===0 || imagesCount===1 ? 'text-red-200':'text-black'}`} />
                </button></div>
            <div className="flex mt-10 justify-center items-center sm:w-80 sm:h-80 md:w-80 md:h-80 md:flex md:items-center">
              {visible &&<img style={{objectFit:'contain'}} src={images[imageNumber]} className="imageSlide w-[100%] h-[100%] rounded-[20px] sm:rounded-[50px]" alt="" /> }  
            </div>
            <div className="flex items-center justify-center">
                <button
                style={style}
                onClick={()=>{
                    if(imageNumber<imagesCount-1 && imagesCount>0){
                        if(dispatcher){
                            changeHandler(images[imageNumber+1]);
                        }
                        setImageNumber(imageNumber+1);
                        setVisible(false);
                        setTimeout(()=>{
                            setVisible(true);
                        },10)
                    }
                }}
                 className="p-0 flex items-center justify-center rounded-full">
                    <ArrowRight className={`w-5 h-5 ${imageNumber===imagesCount-1 || imagesCount===1 ? 'text-red-200':'text-black'}`} />
                </button>
            </div>
        </div>
    );
};