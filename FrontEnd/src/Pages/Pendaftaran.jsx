import React from 'react'
import KurikulumPendaftaran from '../Components/KurikulumPendaftaran'
import { kelasDanKurikulum } from '../../utils'

const Pendaftaran = () => {
  const data = kelasDanKurikulum
  console.log(data.map((data) => data.kelas))
  return (
    <div className='px-4 md:px-8'>
      <KurikulumPendaftaran />
    </div>
  )
}

export default Pendaftaran