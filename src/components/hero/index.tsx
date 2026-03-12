// Hooks
import Image from 'next/image'
import heroImg from './assets/hero-img.jpg'

export function Hero() {
  return (
    <section
      id='hero'
      className='relative w-full min-h-screen grid place-items-center'
    >
      <div className='w-full max-w-6xl mx-auto px-5'>
        <div className='absolute inset-0'>
          <Image
            src={heroImg}
            alt='Imagem hero'
            quality={100}
            priority
            className='object-cover w-full h-full'
          />

          <div className='absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/70' />
        </div>

        <div className='relative z-10 space-y-2 max-w-3xl'>
          <p className='uppercase text-zinc-500 text-sm font-medium'>Psicóloga Clínica — CRP 00/00000</p>
          <h1 className='text-white text-4xl md:text-4xl lg:text-5xl font-semibold'>
            Dra. Carolina Mendes
          </h1>
          <h2 className='text-zinc-300 mb-10'>
            Cuidar da mente é um ato de coragem. Estou aqui para te acompanhar
            nessa jornada de autoconhecimento e transformação.
          </h2>

          <div className='w-full md:w-fit grid text-center md:grid-cols-2 gap-3'>
            <a
              href='#'
              target='_blank'
              className='transition-all duration-300 hover:-translate-y-1 py-2 px-5 bg-purple-500 text-white rounded'
            >
              Agendar Consulta
            </a>
            
            <a
              href='#services'
              className='transition-all duration-300 hover:-translate-y-1 py-2 px-5 bg-white text-purple-500 rounded'
            >
              Meu Trabalho
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
