import logo from '../../assets/images/logo.png'
import { RiWhatsappFill, RiWhatsappLine , RiInstagramFill, RiInstagramLine} from "react-icons/ri"
import { AiFillFacebook, AiOutlineFacebook } from "react-icons/ai"

const Footer_ = () => {
    return (
        <footer className="bg-dark-green text-text-white flex flex-col gap-6 pb-4 pt-[6rem] mt-10">
        <div className="container mx-auto grid md:grid-cols-4 gap-4 px-8">
            <div>
                <h4 className="font-bold mb-4">Tentang Pesantren</h4>
                <ul>
                    <li><a href="#" className="hover:underline">Profil Pesantren</a></li>
                    <li><a href="#" className="hover:underline">Tujuan Pendidikan</a></li>
                    <li><a href="#" className="hover:underline">Hubungi Kami</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-4">Program Pesantren</h4>
                <ul>
                    <li><a href="#" className="hover:underline">Kegiatan Santri</a></li>
                    <li><a href="#" className="hover:underline">Tafsir Al-Qur'an</a></li>
                    <li><a href="#" className="hover:underline">Pelatihan Kewirausahaan</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-4">Ikuti Kami</h4>
                <ul>
                    <li><a href="#" className="hover:underline">Instagram</a></li>
                    <li><a href="#" className="hover:underline">Facebook</a></li>
                    <li><a href="#" className="hover:underline">Telegram</a></li>
                </ul>
            </div>
            <div className='flex justify-center items-center'>
                <img src={logo} alt="" className='size-[6rem]' />
            </div>
        </div>
        <p className="mt-8 text-center">&copy; 2025 Pondok Pesantren Nurul Hikmah. Hak cipta dilindungi.</p>
    </footer>
    )
}

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