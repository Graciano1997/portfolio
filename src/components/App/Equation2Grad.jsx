import { LucideBadgeInfo,TriangleIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setConstants, setResult } from "../Slices/mathSlice";

export const Equation2Grad=()=>{
    const mathState=useSelector((state)=>state.mathState);
    const dispach = useDispatch();

    const constsHandler=(element)=>{
        if(element.target.value==''){
            dispach(setConstants({...mathState.constants,[element.target.name]:null}))
        }else{
            dispach(setConstants({...mathState.constants,[element.target.name]:element.target.value*1}));
          }
    }

    const calcHandler = ()=>{
        const deltaCalc = (Math.pow(mathState.constants.b,2) + (-4*mathState.constants.a*mathState.constants.c));
        
        if (deltaCalc>=0){
            const x1=(-1*mathState.constants.b + Math.sqrt(deltaCalc))/2*mathState.constants.a;
            const x2=(-1*mathState.constants.b - Math.sqrt(deltaCalc))/2*mathState.constants.a;
            console.log(x1,x2);
            dispach(setResult({delta:deltaCalc,x1:x1,x2:x2}))
        }else{
            dispach(setResult({delta:deltaCalc,x1:null,x2:null}));
        }
    }

    return(
        <div className="bg-[#333] p-3 rounded flex flex-col w-[80vw] h-[60vh] overflow-y-scroll">
            <h2 className="text-start text-white text-2xl">ax<sup>2</sup> + bx + c = 0</h2>
            <div className="grid sm:flex gap-3 mt-3">
                <input type="number" name="a" value={mathState.constants.a} onChange={constsHandler} className="p-1 sm:p-2 rounded bg-white text-black w-[100%]" placeholder="a"  />
                <input name="b" type="number" value={mathState.constants.b} onChange={constsHandler} className="p-1 sm:p-2 rounded bg-white text-black w-[100%]" placeholder="b"  />
                <input name="c" type="number" value={mathState.constants.c} onChange={constsHandler} className="p-1 sm:p-2 rounded bg-white text-black w-[100%]" placeholder="c"  />
            </div>
            <div className="flex gap-2 justify-center">

            {
               typeof mathState.constants.a && mathState.constants.c!=null && mathState.constants.b!=null &&(
                    <button style={{alignSelf:'center'}} onClick={calcHandler} className="p-1 mt-2">Calculate</button>
                )
            }

            </div>

            {mathState.result.delta!=null  &&(

                <div className="flex flex-wrap sm:grid sm:grid-cols-3  gap-5 mt-5 ">
                <div className="w-[50%] ">
                <h3 className="text-white text-start">
                1º Step
                </h3>
                <div className="flex text-white mt-5">
                <TriangleIcon className="text-white w-5 h-5"/>= b<sup>2</sup> - 4.a.c
                </div>
                <div className="flex text-white mt-5">
                <TriangleIcon className="text-white w-5 h-5"/>= ({mathState.constants.b})<sup>2</sup> - 4.{`${mathState.constants.a}.${mathState.constants.c}`}
                </div>
                <div className="flex text-white mt-5">
                <TriangleIcon className="text-white w-5 h-5"/> = {mathState.result.delta}
                </div>
                </div>
                {
                    mathState.result.delta >=0 && (
                        <>
                <div className="w-[60%]">
                <h3 className="text-white text-start">
                2º Step
                </h3>
                <div className="flex text-white mt-5">
                X1= {'('} - b  + <div className="flex items-center"><div className="flex  ">V<TriangleIcon  className="text-white w-3 h-3 mt-[6px] "/></div></div>{' ) /'} {'2a'}
                </div>
                <div className="flex text-white mt-5">
                X1= {'('} - {mathState.constants.b}  + <div className="flex items-center"><div className="flex  ">V{mathState.result.delta}</div></div>{' ) /'} {`2.${mathState.constants.a}`}
                </div>
                <div className="flex text-red-400 mt-5">
                X1= {mathState.result.x1}
                </div>
                </div>
                <div className="w-[60%]">
                <h3 className="text-white text-start">
                3º Step
                </h3>
                <div className="flex text-white mt-5">
                X2= {'('} - b  + <div className="flex items-center"><div className="flex  ">V<TriangleIcon  className="text-white w-3 h-3 mt-[6px] "/></div></div>{' ) /'} {'2a'}
                </div>
                <div className="flex text-white mt-5">
                X2= {'('} - {mathState.constants.b}  - <div className="flex items-center"><div className="flex  ">V{mathState.result.delta}</div></div>{' ) /'} {`2.${mathState.constants.a}`}
                </div>
                <div className="flex text-red-400 mt-5">
                X2= {mathState.result.x2}
                </div>
                </div>
                        </>
                    )
                }
                {
                    mathState.result.delta < 0 && (
                <div className="w-[100%] flex gap-2">
                <LucideBadgeInfo className="w-5 h-5 text-white"/>
                <h3 className="text-white text-start"> There is not a Real Solution</h3>
                </div>
                    )
                }
            </div>
        )
            }
            
            </div>
    )
};