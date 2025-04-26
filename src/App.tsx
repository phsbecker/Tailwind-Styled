import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home/Home'
import Tailwind from './pages/Tailwind/Tailwind'
import Styled from './pages/Styled/Styled'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Home/>}/>
          <Route path='/Tailwind/:user' element={<Tailwind/>}/>
          <Route path='/Styled/:user' element={<Styled/>}/>
          <Route/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
