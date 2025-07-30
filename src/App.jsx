import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Menu } from './components/general/menu'
import { Main } from './components/Main'
import { Apps } from './components/Apps'
import { About } from './components/About'
import { Docs } from './components/Docs'
import { Setting } from './components/Setting'
import { MusicApp } from './components/general/MusicApp'
import { useState } from 'react'

function App() {
  const [visibilityControl,setVisibilityControl]=useState(false);
  return (
 <>
      <main className='w-full h-full flex justify-center'>
      <Routes>
        <Route path={'/'} element={<Main visibilityControl={setVisibilityControl} />}/>
        <Route path={'/apps'} element={<Apps/>}/>
        <Route path={'/about'} element={<About/>}/>
        <Route path={'/docs'} element={<Docs/>}/>
        <Route path={'/music'} element={<MusicApp/>}/>
        <Route path={'/setting'} element={<Setting/>}/>
      </Routes> 
        <Menu/>
        <MusicApp setVisibilityControl={setVisibilityControl} style={`fixed top-10 ${visibilityControl?'':'hidden'} `}/>
        </main>
        
 </>   
  )
}

export default App
