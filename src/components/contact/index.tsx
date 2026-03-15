import { Container } from '@/components/container'
import { Map } from './map'
import { icons } from './icons-contact'

export function Contact() {
  return (
    <Container>
      <section id='contact' className='py-15 grid md:grid-cols-2 gap-7'>
        <div className='space-y-2'>
          <h3 className='uppercase text-purple-600 text-sm tracking-[3px]'>Contato</h3>
          <h1 className='text-3xl md:text-4xl'>
            Vamos começar sua <span className='text-purple-500'>jornada</span>
          </h1>
          <h2 className='text-zinc-500 md:text-sm mb-8'>
            Entre em contato para agendar sua primeira consulta ou tirar dúvidas. O
            primeiro passo é sempre o mais importante.
          </h2>

          <div className='grid gap-4'>
            {icons.map(icon => (
              <div key={icon.name} className='flex items-center gap-4'>
                <div className='w-10 h-10 rounded-lg flex justify-center items-center bg-purple-500 text-white'>
                  {icon.icon}
                </div>
                <div>
                  <h3 className='text-sm text-zinc-500'>{icon.name}</h3>
                  <p>{icon.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Map />
      </section>
    </Container>
  )
}
