import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Menu } from './components/general/menu'
import { Main } from './components/Main'
import { Apps } from './components/Apps'
import { About } from './components/About'
import { Docs } from './components/Docs'
import { Setting } from './components/Setting'

function App() {

  return (
 <>
      <main className='w-full h-full flex justify-center'>
      <Routes>
        <Route path={'/'} element={<Main/>}/>
        <Route path={'/apps'} element={<Apps/>}/>
        <Route path={'/about'} element={<About/>}/>
        <Route path={'/docs'} element={<Docs/>}/>
        <Route path={'/setting'} element={<Setting/>}/>
      </Routes> 
        <Menu/>
        </main>
        
 </>   
  )
}

export default App
