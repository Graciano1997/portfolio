import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Menu } from './components/general/menu'
import { Main } from './components/Main'
import { Apps } from './components/Apps'
import { About } from './components/About'
import { Docs } from './components/Docs'
import { Setting } from './components/Setting'
import { useState } from 'react'
import EditorApp from './components/App/EditorApp'
import { MusicApp } from './components/App/MusicApp'
import { WeatherApp } from './components/App/WeatherApp'
import { useDispatch } from 'react-redux'
import { setTime } from './components/Slices/appSlice'
import { MathApp } from './components/App/MathApp'

function App() {
  const [visibilityControl,setVisibilityControl]=useState({music:false,editor:false,weather:false,mathApp:false});
  const dispatch = useDispatch();

      setInterval(()=>{
        dispatch(setTime());
      },1000);

  return (
 <>
      <main className='w-full h-full flex justify-center'>
      <Routes>
        <Route path={'/'} element={<Main visibilityControl={visibilityControl}  setVisibilityControl={setVisibilityControl} />}/>
        <Route path={'/apps'} element={<Apps/>}/>
        <Route path={'/about'} element={<About/>}/>
        <Route path={'/docs'} element={<Docs/>}/>
        <Route path={'/setting'} element={<Setting/>}/>
      </Routes> 
        <Menu/>
        <MusicApp setVisibilityControl={setVisibilityControl} visibilityControl={visibilityControl} style={`fixed top-10 ${visibilityControl.music ?'':'hidden'} `}/>
        <EditorApp setVisibilityControl={setVisibilityControl} visibilityControl={visibilityControl} style={`fixed top-10 ${visibilityControl.editor ?'':'hidden'} `}/>
        <WeatherApp setVisibilityControl={setVisibilityControl} visibilityControl={visibilityControl} style={`fixed top-10 ${visibilityControl.weather ?'':'hidden'} `}/>
        {
        visibilityControl.mathApp && (
          <MathApp setVisibilityControl={setVisibilityControl} visibilityControl={visibilityControl} style={`fixed top-10 ${visibilityControl.mathApp ?'':'hidden'} `}/>
        )       
        }
        </main>
        
 </>   
  )
}

export default App
