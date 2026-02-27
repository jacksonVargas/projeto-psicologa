import { Container } from '@/components/container'
import { icons } from './icons-contact'

export function Contact() {
  return (
    <Container>
      <section id='contact' className='py-15 grid md:grid-cols-2 gap-7'>
        <div className='space-y-2'>
          <h3 className='uppercase text-cyan-600 text-sm tracking-[3px]'>
            Contato
          </h3>
          <h1 className='text-3xl md:text-4xl'>
            Vamos começar sua <span className='text-cyan-600'>jornada</span>
          </h1>
          <h2 className='text-zinc-500 md:text-sm mb-8'>
            Entre em contato para agendar sua primeira consulta ou tirar
            dúvidas. O primeiro passo é sempre o mais importante.
          </h2>

          <div className='grid gap-4'>
            {icons.map((icon) => (
              <div key={icon.name} className='flex items-center gap-4'>
                <div className='w-10 h-10 rounded-lg flex justify-center items-center bg-cyan-600 text-white'>
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

        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220895.17940008777!2d-51.17714195!3d-30.108870050000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95199cd2566acb1d%3A0x603111a89f87e91f!2sPorto%20Alegre%2C%20RS!5e0!3m2!1spt-BR!2sbr!4v1772222427201!5m2!1spt-BR!2sbr'
          className='w-full h-full rounded'
        />
      </section>
    </Container>
  )
}
