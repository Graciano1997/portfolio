import React, {useEffect, useState } from 'react';
import { AppDesign } from './AppDesign';
import { PiIcon } from 'lucide-react';
import { AppFooter } from '../general/AppFooter';
import { useDispatch, useSelector } from 'react-redux';


export const  CalculatorApp=({ style, setVisibilityControl, visibilityControl })=> {
  const [mobileMusicMenuIsOpen, setMobileMusicMenuIsOpen] = useState(false);
  const dispatch = useDispatch();
  
  const appState=useSelector((state)=>state.appState);
  

  return (
    <>
      <AppDesign
        setMobileMusicMenuIsOpen={setMobileMusicMenuIsOpen}
        style={style}
        closeHandler={() =>{ 

           setVisibilityControl({ ...visibilityControl, calculator: false })}}
        minimizeHandler={() => setVisibilityControl({ ...visibilityControl, calculator: false })}
      >
        <div className='w-[97vw] h-[80vh] mt-15 flex flex-col items-center gap-5 '>
          

          <div className='w-[80vw] p-3 h-90 flex flex-col flex-wrap  justify-center gap-5 overflow-y-scroll '>
            
          </div>
             
        </div>
        
        <AppFooter icon={<PiIcon className="w-7 h-7 text-white"/>} style={'absolute bottom-5 left-5 text-white'}/>
      </AppDesign>
    </>
  );
}
