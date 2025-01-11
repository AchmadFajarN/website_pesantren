import { IoHomeOutline, IoHome, IoPersonCircleOutline, IoPersonCircle, } from "react-icons/io5";
import { AiFillProfile, AiOutlineProfile } from "react-icons/ai";
import { RiBookMarkedFill, RiBookMarkedLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
    <div className='max-w-screen-md border border-x-slate-600 bg-gray-200 py-4 px-4'>
        <nav className='bg-gray-300 p-4 flex justify-evenly rounded-md'>
            <Link to={'/'} className='group flex flex-col items-center'>
                <IoHomeOutline size={25}  className='group-hover:hidden'/> 
                <IoHome size={25} className='hidden group-hover:block' />
                <p>Beranda</p>
            </Link>
            <Link to={'/blog'} className='group flex flex-col items-center'>
                <AiOutlineProfile size={25}  className='group-hover:hidden'/> 
                <AiFillProfile size={25} className='hidden group-hover:block' />
                <p>Blog</p>
            </Link>
            <Link to={'/pendaftaran'} className='group flex flex-col items-center'>
                <IoPersonCircleOutline size={25}  className='group-hover:hidden'/> 
                <IoPersonCircle size={25} className='hidden group-hover:block' />
                <p>Pendaftaran</p>
            </Link>
            <Link to={'/profile'} className='group flex flex-col items-center'>
                <RiBookMarkedLine size={25}  className='group-hover:hidden'/> 
                <RiBookMarkedFill size={25} className='hidden group-hover:block' />
                <p>Profile</p>
            </Link>
        </nav>
    </div>
    </>
  )
}

export default Navigation