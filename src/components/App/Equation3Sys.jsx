import { LucideBadgeInfo,TriangleIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setResult, setSys2Constants, setSys2Result, setSys3Constants, setSys3Result } from "../Slices/mathSlice";
import { Matriz } from "./Matriz";
import { MatrizX } from "./MatrizX";
import { MatrizY } from "./MatrizY";
import { MatrizZ } from "./MatrizZ";

export const Equation3Sys=()=>{
    const mathState=useSelector((state)=>state.mathState);
    const dispach = useDispatch();

    const constsHandler=(element)=>{
        if(element.target.value==''){
            dispach(setSys3Constants({...mathState.sys3Constants,[element.target.name]:null}))
        }else{
            dispach(setSys3Constants({...mathState.sys3Constants,[element.target.name]:element.target.value*1}));
          }
    }

    const calcHandler = ()=>{

        const deltaCalc = (
        (   (mathState.sys3Constants.a1*mathState.sys3Constants.b2*mathState.sys3Constants.c3)+
            (mathState.sys3Constants.b1*mathState.sys3Constants.c2*mathState.sys3Constants.a3)+
            (mathState.sys3Constants.c1*mathState.sys3Constants.a2*mathState.sys3Constants.b3)
        ) + 

       -1*( (mathState.sys3Constants.a3*mathState.sys3Constants.b2*mathState.sys3Constants.c1)+
            (mathState.sys3Constants.b3*mathState.sys3Constants.c2*mathState.sys3Constants.a1)+
            (mathState.sys3Constants.c3*mathState.sys3Constants.a2*mathState.sys3Constants.b1)
        )
            );
        
        const deltaX = (
        (   (mathState.sys3Constants.d1*mathState.sys3Constants.b2*mathState.sys3Constants.c3)+
            (mathState.sys3Constants.b1*mathState.sys3Constants.c2*mathState.sys3Constants.d3)+
            (mathState.sys3Constants.c1*mathState.sys3Constants.d2*mathState.sys3Constants.b3)
        ) + 

       -1*( (mathState.sys3Constants.d3*mathState.sys3Constants.b2*mathState.sys3Constants.c1)+
            (mathState.sys3Constants.b3*mathState.sys3Constants.c2*mathState.sys3Constants.d1)+
            (mathState.sys3Constants.c3*mathState.sys3Constants.d2*mathState.sys3Constants.b1)
        )
            );

        const deltaY = (
        (   (mathState.sys3Constants.a1*mathState.sys3Constants.d2*mathState.sys3Constants.c3)+
            (mathState.sys3Constants.d1*mathState.sys3Constants.c2*mathState.sys3Constants.a3)+
            (mathState.sys3Constants.c1*mathState.sys3Constants.a2*mathState.sys3Constants.d3)
        ) + 

       -1*( (mathState.sys3Constants.a3*mathState.sys3Constants.d2*mathState.sys3Constants.c1)+
            (mathState.sys3Constants.d3*mathState.sys3Constants.c2*mathState.sys3Constants.a1)+
            (mathState.sys3Constants.c3*mathState.sys3Constants.a2*mathState.sys3Constants.d1)
        )
            );
        
        const deltaZ = (
        (   (mathState.sys3Constants.a1*mathState.sys3Constants.b2*mathState.sys3Constants.d3)+
            (mathState.sys3Constants.b1*mathState.sys3Constants.d2*mathState.sys3Constants.a3)+
            (mathState.sys3Constants.d1*mathState.sys3Constants.a2*mathState.sys3Constants.b3)
        ) + 

       -1*( (mathState.sys3Constants.a3*mathState.sys3Constants.b2*mathState.sys3Constants.d1)+
            (mathState.sys3Constants.b3*mathState.sys3Constants.d2*mathState.sys3Constants.a1)+
            (mathState.sys3Constants.d3*mathState.sys3Constants.a2*mathState.sys3Constants.b1)
        )
            );

        const x= deltaX/deltaCalc;
        const y= deltaY/deltaCalc;
        const z= deltaZ/deltaCalc;

        dispach(setSys3Result({d:deltaCalc,dx:deltaX,dy:deltaY,dz:deltaZ,x:x,y:y,z:z}));
    }

    return(
        <div className="bg-[#333] p-3 rounded flex flex-col w-[80vw] h-[60vh] overflow-y-scroll">
            <div className="flex flex-col p-2" style={{borderLeft:'2px solid white',borderRadius:'10px'}}>
            <h2 className="text-start text-white text-2xl">a1x + b1y + c1z = d1</h2>
            <h2 className="text-start text-white text-2xl">a2x + b2y + c2z = d2</h2>
            <h2 className="text-start text-white text-2xl">a2x + b2y + c3z = d3</h2>
            </div>
            <div className="grid grid-cols-4 grid-rows-3 gap-3 mt-8">
                
                <input type="number" name="a1" value={mathState.sys3Constants.a1} onChange={constsHandler} className="p-1 sm:p-2 rounded bg-white text-black w-[100%]" placeholder="a1"  />
                <input name="b1" type="number" value={mathState.sys3Constants.b1} onChange={constsHandler} className="p-1 sm:p-2 rounded bg-white text-black w-[100%]" placeholder="b1"  />
                <input name="c1" type="number" value={mathState.sys3Constants.c1} onChange={constsHandler} className="p-1 sm:p-2 rounded bg-white text-black w-[100%]" placeholder="c1"  />
                
                <div className="text-white flex items-center gap-2 "> <span className="text-2xl">=</span>
                <input name="d1" type="number" value={mathState.sys3Constants.d1} onChange={constsHandler} className="p-1 sm:p-2 rounded bg-white text-black w-[100%]" placeholder="d1"  />
                </div>
                <input type="number" name="a2" value={mathState.sys3Constants.a2} onChange={constsHandler} className="p-1 sm:p-2 rounded bg-white text-black w-[100%]" placeholder="a2"  />
                <input name="b2" type="number" value={mathState.sys3Constants.b2} onChange={constsHandler} className="p-1 sm:p-2 rounded bg-white text-black w-[100%]" placeholder="b2"  />
                <input name="c2" type="number" value={mathState.sys3Constants.c2} onChange={constsHandler} className="p-1 sm:p-2 rounded bg-white text-black w-[100%]" placeholder="c2"  />
                
                <div className="text-white flex items-center gap-2"><span className="text-2xl">=</span>
                <input name="d2" type="number" value={mathState.sys3Constants.d2} onChange={constsHandler} className="p-1 sm:p-2 rounded bg-white text-black w-[100%]" placeholder="d2"  />
                </div>

                <input type="number" name="a3" value={mathState.sys3Constants.a3} onChange={constsHandler} className="p-1 sm:p-2 rounded bg-white text-black w-[100%]" placeholder="a3"  />
                <input name="b3" type="number" value={mathState.sys3Constants.b3} onChange={constsHandler} className="p-1 sm:p-2 rounded bg-white text-black w-[100%]" placeholder="b3"  />
                <input name="c3" type="number" value={mathState.sys3Constants.c3} onChange={constsHandler} className="p-1 sm:p-2 rounded bg-white text-black w-[100%]" placeholder="c3"  />
                
                <div className="text-white flex items-center gap-2 "> <span className="text-2xl">=</span>
                <input name="d3" type="number" value={mathState.sys3Constants.d3} onChange={constsHandler} className="p-1 sm:p-2 rounded bg-white text-black w-[100%]" placeholder="d3"  />
                </div>
            </div>
            <div className="flex gap-2 justify-center">

            {
                mathState.sys3Constants.a1!=null && mathState.sys3Constants.a2!=null
                && mathState.sys3Constants.a3!=null && mathState.sys3Constants.b1!=null 
                && mathState.sys3Constants.b2!=null && mathState.sys3Constants.b3!=null
                && mathState.sys3Constants.c1!=null && mathState.sys3Constants.c2!=null
                && mathState.sys3Constants.c3!=null && mathState.sys3Constants.d1!=null 
                && mathState.sys3Constants.d2!=null && mathState.sys3Constants.d3!=null
                &&
                (
                    <button style={{alignSelf:'center'}} onClick={calcHandler} className="p-1 mt-2">Calculate</button>
                )
            }

            </div>

                <div className="flex flex-wrap sm:grid sm:grid-cols-1  gap-5 mt-5 ">
                {
                mathState.sys3Result.d!=null
                && 
                <>
            
                <div className="w-[100%]">
                <h3 className="text-white text-start">
                1º Step
                </h3>
                <Matriz sysNumber={3} iconComponent={<TriangleIcon className="text-white w-5 h-5" />}/>
                <Matriz sysNumber={3} constants={mathState.sys3Constants} iconComponent={<TriangleIcon className="text-white w-5 h-5" />}/>

                <div className="flex text-white mt-5 gap-2 items-center">
                <TriangleIcon className="text-white w-5 h-5"/> = {mathState.sys3Result.d}
                  </div>
                </div>


                <div className="w-[100%]">
                <h3 className="text-white text-start">
                2º Step
                </h3>
                <MatrizX sysNumber={3} iconComponent={<p className="text-white text-xl">Dx</p>}/>
                <MatrizX sysNumber={3} constants={mathState.sys3Constants}  iconComponent={<p className="text-white text-xl">Dx</p>}/>

                <div className="flex flex-col text-white mt-5 gap-2 items-start ">
                <p className="text-white text-xl">Dx = {mathState.sys3Result.dx}</p> 
                <p className="text-white text-xl flex items-center">x = Dx / <TriangleIcon className="text-white w-5 h-5"/> </p> 
                <p className="text-red-400 text-xl">x = {mathState.sys3Result.x} </p> 
                </div>
                </div>


                <div className="w-[100%]">
                <h3 className="text-white text-start">
                3º Step
                </h3>
                <MatrizY sysNumber={3} iconComponent={<p className="text-white text-xl">Dy</p>}/>
                <MatrizY sysNumber={3} constants={mathState.sys3Constants}  iconComponent={<p className="text-white text-xl">Dy</p>}/>

                <div className="flex flex-col text-white mt-5 gap-2 items-start ">
                <p className="text-white text-xl">Dy = {mathState.sys3Result.dy}</p> 
                <p className="text-white text-xl flex items-center">y = Dy / <TriangleIcon className="text-white w-5 h-5"/> </p> 
                <p className="text-red-400 text-xl">x = {mathState.sys3Result.y} </p> 
                </div>
                </div>


                <div className="w-[100%]">
                <h3 className="text-white text-start">
                4º Step
                </h3>
                <MatrizZ iconComponent={<p className="text-white text-xl">Dz</p>}/>
                <MatrizZ constants={mathState.sys3Constants}  iconComponent={<p className="text-white text-xl">Dz</p>}/>

                <div className="flex flex-col text-white mt-5 gap-2 items-start ">
                <p className="text-white text-xl">Dz = {mathState.sys3Result.dz}</p> 
                <p className="text-white text-xl flex items-center">z = Dz / <TriangleIcon className="text-white w-5 h-5"/> </p> 
                <p className="text-red-400 text-xl">x = {mathState.sys3Result.z} </p> 
                </div>
                </div>

                </>
                }


            </div>          
            </div>
    )
};