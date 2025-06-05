import Underline from './Underline'
import OfflinePendaftaran from './OfflinePendaftaran'
import OnlinePendaftaran from './OnlinePendaftaran'

const PendaftaranSection = () => {
  return (
    <section className='w-full min-h-screen pt-40 lg:pt-36 md:pt-48'>
        <h1 className='font-bold text-xl text-green-700'>Pendaftaran</h1>
        <Underline />
        <OfflinePendaftaran />
        <OnlinePendaftaran />
    </section>
  )
}

export default PendaftaranSection