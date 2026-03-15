'use client'

import { useState } from 'react'

export function Map() {
  const [showMap, setShowMap] = useState(false)

  if (showMap) {
    return (
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220895.17940008777!2d-51.17714195!3d-30.108870050000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95199cd2566acb1d%3A0x603111a89f87e91f!2sPorto%20Alegre%2C%20RS!5e0!3m2!1spt-BR!2sbr!4v1772222427201!5m2!1spt-BR!2sbr'
        loading='lazy'
        allowFullScreen
        referrerPolicy='no-referrer-when-downgrade'
        className='w-full h-full rounded'
      />
    )
  }

  return (
    <button onClick={() => setShowMap(true)} className='relative w-full h-full'>
      <div className='absolute inset-0 flex items-center justify-center bg-slate-100 rounded'>
        <span className='bg-white px-4 py-2 rounded font-medium'>Nossa localização</span>
      </div>
    </button>
  )
}
