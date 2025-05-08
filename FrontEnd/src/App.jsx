import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './Style/style.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'

const App = () => {
  return (
    <div className='relative'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/pendaftaran' element={<h1>pendaftaran</h1>} />
          <Route path='/blog' element={<h1>blog</h1>} />
          <Route path='/profile' element={<h1>profile</h1>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
export default App