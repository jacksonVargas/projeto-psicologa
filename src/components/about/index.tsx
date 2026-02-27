import Image from 'next/image'
import { Container } from '@/components/container'

import imgAbout from './assets/img-about.jpg'

export function About() {
  return (
    <Container>
      <section id='about' className='py-15 grid md:grid-cols-2 gap-7'>
        <div className='w-full space-y-2'>
          <h3 className='text-cyan-600 text-sm font-medium'>SOBRE MIM</h3>
          <h2 className='text-3xl md:text-4xl font-semibold'>Um espaço seguro para <span className='text-cyan-600'>você ser você</span></h2>
          <p className='md:text-sm text-zinc-500 mb-8'>
            Sou Carolina Mendes, psicóloga clínica com formação em Terapia
            Cognitivo-Comportamental e especialização em ansiedade, depressão e
            relacionamentos. Acredito que cada pessoa carrega em si a capacidade
            de se transformar. <br /> <br />
            Meu trabalho é criar um ambiente acolhedor e sem julgamentos, onde
            você possa explorar seus sentimentos, superar desafios e construir
            uma vida mais plena e significativa.
          </p>
          
          <div className='grid grid-cols-2 gap-7'>
            <div className='text-center space-y-2'>
              <h3 className='text-2xl font-semibold'>10+</h3>
              <p className='text-zinc-500 md:text-sm'>Anos de Experiência</p>
            </div>
            
            <div className='text-center space-y-2'>
              <h3 className='text-2xl font-semibold'>2.000+</h3>
              <p className='text-zinc-500 md:text-sm'>Pacientes Atendidos</p>
            </div>
          </div>
        </div>

        <div>
          <Image
            src={imgAbout}
            alt='Imagem sobre'
            className='object-cover rounded w-full h-full'
          />
        </div>
      </section>
    </Container>
  )
}
