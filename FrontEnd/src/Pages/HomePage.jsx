import HeroHomepage from '../Components/HeroHomepage'
import PosterHomepage from '../Components/PosterHomepage'
import ArtikelHomepage from '../Components/ArtikelHomepage'
import SectionHomepage from '../Components/SectionHomepage'
import { useRef } from 'react'

const HomePage = () => {
  const scrollTarget = useRef(null);
  return (
    <div className='px-4 md:px-8'>
        <HeroHomepage scrollTarget={ scrollTarget } />
        <SectionHomepage scrollTaget={ scrollTarget } />
        <PosterHomepage />
        <ArtikelHomepage />
    </div>
  )
}

export default HomePage