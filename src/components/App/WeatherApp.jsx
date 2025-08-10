import React, {useEffect, useState } from 'react';
import { AppDesign } from './AppDesign';
import { CloudSunRainIcon,LoaderCircleIcon,LucideX } from 'lucide-react';
import { AppFooter } from '../general/AppFooter';
import { Search } from '../general/Search';
import { WeatherCard } from './WeatherCard';
import { useDispatch, useSelector } from 'react-redux';
import { cleanWeather, setSearching, weatherFetch } from '../Slices/appSlice';
import { firstCapitalize } from '../../lib/firstCapitalize';
import { useTranslation } from 'react-i18next';


export const  WeatherApp=({ style, setVisibilityControl, visibilityControl })=> {
  const [mobileMusicMenuIsOpen, setMobileMusicMenuIsOpen] = useState(false);
  const dispatch = useDispatch();
  
  const appState=useSelector((state)=>state.appState);
  const weatherData = appState.weather;
  const {t}=useTranslation();
  

  return (
    <>
      <AppDesign
        setMobileMusicMenuIsOpen={setMobileMusicMenuIsOpen}
        style={style}
        closeHandler={() =>{ 
          dispatch(cleanWeather());
          dispatch(setSearching(false));
           setVisibilityControl({ ...visibilityControl, weather: false })}}
        minimizeHandler={() => setVisibilityControl({ ...visibilityControl, weather: false })}
      >
        <div className='w-[97vw] h-[80vh] mt-15 flex flex-col items-center gap-5 '>
          <Search
          weather={true}
          dispatcher={()=>{
            dispatch(weatherFetch(appState.query));          
          }}

           searchingPlaceholder={firstCapitalize(t('province_or_city'))} style={'mt-2'}/>
          <div className='w-[80vw] mb-[-30px]'>
          {weatherData &&
          <h2 className='text-3xl text-white text-start'>{weatherData.resolvedAddress}</h2>
          }
          </div>
          <div className='w-[80vw] p-3 h-90 flex flex-col flex-wrap  justify-center gap-5 overflow-y-outo '>
            
            {appState.isLoading &&  <div className='flex justify-center items-center gap-3'>< LoaderCircleIcon className='w-10 h-10 text-white'/> <h1 className='text-white'> Loading</h1></div>}
            {!appState.isLoading && appState.error  && <div className='flex justify-center items-center gap-3'><LucideX className='w-10 h-10 text-red-600'/> <h4 className='text-white'> There is an Error, Verify the Network is working Or ensure enter a valid city,state,province name.</h4></div>}
            {!appState.isLoading && weatherData && weatherData.days.map((day)=><WeatherCard data={day}/>)}
            </div>
             
        </div>
        
        <AppFooter icon={<CloudSunRainIcon className="w-7 h-7 text-white"/>} style={'absolute bottom-5 left-5 text-white'}/>
      </AppDesign>
    </>
  );
}
