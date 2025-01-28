import logo from '../../assets/images/logo.png'
import { RiWhatsappFill, RiWhatsappLine , RiInstagramFill, RiInstagramLine} from "react-icons/ri"
import { AiFillFacebook, AiOutlineFacebook } from "react-icons/ai"

const Footer = () => {
  return (
    <>
    <footer className="md:mb-0 mb-[7rem] border w-full h-[15rem] bg-dark-green flex gap-5 flex-col justify-center items-center">
        <img src={logo} alt="" width='45rem' />
        <div className='flex gap-4 mb-4 flex-col justify-center items-center'>
            <p className='text-krem font-semibold'>Kontak Kami:</p>
            <div className='flex gap-4'>
                <a href="#" className='group'>
                    <RiWhatsappLine color='#f5d44f' size={30} className='group-hover:hidden' />
                    <RiWhatsappFill color='#f5d44f' size={30} className='hidden group-hover:block' />
                </a>
                <a href="#" className='group'>
                    <RiInstagramLine color='#f5d44f' size={30} className='group-hover:hidden' />
                    <RiInstagramFill color='#f5d44f' size={30} className='hidden group-hover:block' />
                </a>
                <a href="#" className='group'>
                    <AiOutlineFacebook color='#f5d44f' size={30} className='group-hover:hidden' />
                    <AiFillFacebook color='#f5d44f' size={30} className='hidden group-hover:block' />
                </a>
            </div>
        </div> 
        <p className='text-sm text-krem'>copyright:2025</p>
    </footer>
    </>
  )
}

export default Footer