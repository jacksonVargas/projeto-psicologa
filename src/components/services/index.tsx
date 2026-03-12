import { Container } from '@/components/container'
import { Title } from '@/components/title'
import { cards } from './card-service-type'

export function Services() {
  return (
    <Container>
      <section id='services' className='py-15'>
        <Title title='Serviços' info='Como posso te ajudar' />
        
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {cards.map(card => (
            <div
              key={card.title}
              className='transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-5 rounded bg-white shadow-sm border border-purple-100 space-y-3 cursor-default'
            >
              <div className='w-11 h-11 bg-purple-500 rounded-lg flex justify-center items-center text-white'>{card.icon}</div>
              <h3 className='text-xl font-semibold'>{card.title}</h3>
              <p className='md:text-sm text-zinc-500'>{card.info}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  )
}
