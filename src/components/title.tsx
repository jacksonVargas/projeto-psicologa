interface TitleProps {
  title: string
  info: string
}

export function Title({ title, info }: TitleProps) {
  return (
    <div className='text-center max-w-3xl mx-auto mb-10'>
      <h3 className='text-sm uppercase tracking-[3px]  text-zinc-500'>{title}</h3>
      <h1 className='text-3xl md:text-4xl'>{info}</h1>
    </div>
  )
}