import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PapanHeader from './components/PapanHeader'
import CardWejangan from './components/CardWejangan'
import Commentar from './components/Commentar'
import Article from './components/Article'
import PapanMarketing from './components/PapanMarketing'

const App = () => {
  return (
    <>
    <div className='max-w-screen min-h-screen relative overflow-x-hidden'>
      <Navbar />
      <main className='mt-[1rem] mb-[20rem]'>
        <PapanHeader />
        <CardWejangan />
        <PapanMarketing />
        <Commentar />
        <Article />
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App