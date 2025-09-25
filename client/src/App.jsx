import { useState } from 'react'
import './App.css'
import { Nav } from './components/nav'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Trangchu } from './pages/trangchu'
import { Sukien } from './pages/sukien'
import { Sanpham } from './pages/sanpham'
import { Tintuc } from './pages/tintuc'
import { Gioithieu } from './pages/gioithieu'
import { Footer } from './components/footer'

function App() {
  const { theme, setTheme } = useState('light')
  return (
    <Router>
      <div className='flex flex-col h-[100vh] w-full'>
        <div className="w-full fixed z-10 bg-[#ddd]">
          <Nav theme={theme} setTheme={setTheme} />
        </div>

        <div className='flex-1 mt-[60px] w-full' >
          <Routes>
            <Route path='/' element={<Trangchu />} />
            <Route path='/gioithieu' element={<Gioithieu />} />
            <Route path='/sukien' element={<Sukien />} />
            <Route path='/sanpham' element={<Sanpham />} />
            <Route path='/tintuc' element={<Tintuc />} />
          </Routes>
        </div>

        <div className=' w-full h-[300px] bg-[#DDD] text-[#222] flex items-center justify-center'>
          <Footer/>
        </div>
      </div>
    </Router>
  )
}

export default App
