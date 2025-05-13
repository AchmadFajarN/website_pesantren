import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './Style/style.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import Pendaftaran from './Pages/Pendaftaran'
import Profile from './Pages/Profile'

const App = () => {
  return (
    <div>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/pendaftaran' element={<Pendaftaran />} />
            <Route path='/blog' element={<h1>blog</h1>} />
            <Route path='/profile' element={<Profile/>} />
          </Routes>
        </main>
        <Footer />
    </div>
  )
}
export default App