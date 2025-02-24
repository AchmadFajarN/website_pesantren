import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import BlogHeader from '../components/BlogHeader'
import MainArticle from '../components/MainArticle'

const Blog = () => {
  return (
    <div className=' min-h-screen relative'>
      <Navbar />
      <BlogHeader />
      <main className="text-accent-green font-sans mb-20">
        <MainArticle />
      </main>
      <Footer />
    </div>
  )
}

export default Blog