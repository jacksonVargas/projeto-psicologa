export function Footer() {
  return (
    <footer className='w-full bg-white/70 shadow-sm border-t border-t-purple-100'>
      <div className='max-w-6xl mx-auto py-8 px-5 flex flex-col text-center md:flex-row md:justify-between text-sm text-zinc-500 space-y-2'>
        <p>Dra. Carolina Mendes</p>
        <p>&copy; {new Date().getFullYear()} - Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}