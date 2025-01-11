import { Link } from 'react-router-dom'
import Navigation from '../navigation'
import logo from '../../assets/images/logo.png'

const Navbar = () => {
  const navData = [
    {
      path: '/',
      name: 'Beranda'
    },
    {
      path: '/blog',
      name: 'Blog'
    },
    {
      path: '/pendaftaran',
      name: 'Pendaftaran'
    },
    {
      path: '/profile',
      name: 'Profil'
    }
]
  return (
    <header>
          {/* navbar md && < */}
          <div className='min-h-[4rem] bg-krem flex flex-col items-center py-5 w-screen md:min-h-[2rem] md:flex-row md:px-[4rem]'>
            <img src={logo} alt="" width={45} className='mb-4 md:mb-0 md:mr-3'/>
            <div className='text-center md:text-start'>
              <p className='font-semibold text-dark-green'>PONPES NURUL HIKMAH</p>
              <p className='font-semibold text-dark-green'>ASSALAFY</p>
            </div>
            <div className='flex-1 md:flex justify-end hidden'>
              <nav className='flex gap-4'>
                {navData.map((nd) => {
                  return (
                    <Link key={nd.name} to={nd.path} className='text-dark-green hover:text-[#25421a]'>{nd.name}</Link>
                  )
                }) }
              </nav>
            </div>
          </div>
          {/* navbar md && < end */}
          
          {/* navbar small device */}
          <div className='fixed w-full bottom-0 md:hidden'>
            <Navigation />
          </div>
          {/* navbar small device end */}
    </header>
  )
}

export default Navbar