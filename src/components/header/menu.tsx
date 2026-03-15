'use client'

// Hooks
import { useState, useEffect, useRef } from 'react'
import { links } from './menu-types'
import { Menu, X } from 'lucide-react'

export function MenuItems() {
  const [open, setOpen] = useState<boolean>(false)
  const [scroll, setScroll] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => removeEventListener('mousedown', handleClick)
  }, [open])

  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`w-full fixed z-99 top-0 ${scroll ? 'bg-white/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}
      >
        <nav className='max-w-6xl mx-auto py-2 px-5 flex justify-between items-center'>
          <a
            href='#'
            className={`text-xl md:text-2xl font-semibold ${scroll ? 'text-black' : 'text-white'}`}
          >
            Dra. <span className='text-purple-500'>Carolina</span>
          </a>

          <button
            type='button'
            aria-label='Button menu'
            onClick={() => setOpen(!open)}
            className='text-purple-500 md:hidden'
          >
            {open ? <X size={25} /> : <Menu size={25} />}
          </button>

          {/* Desktop */}
          <ul className='hidden md:flex items-center gap-6'>
            {links.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`hover:text-purple-500 md:text-sm ${scroll ? 'text-zinc-500' : 'text-white'}`}
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li>
              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Agendar horário pelo whatsapp'
                onClick={() => setOpen(false)}
                className='md:text-sm transition-all duration-300 hover:scale-103 py-2 px-5 rounded bg-purple-600 text-white w-fit'
              >
                Agendar
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile */}
      {open && (
        <div
          ref={menuRef}
          className='md:hidden w-full h-screen bg-white shadow-sm max-w-70 fixed top-0 left-0 z-99'
        >
          <div className='grid gap-5 py-2 px-5'>
            <a
              href='#'
              onClick={() => setOpen(false)}
              className='text-xl md:text-2xl font-semibold'
            >
              Dra. <span className='text-purple-500'>Carolina</span>
            </a>

            <ul className='grid gap-5'>
              {links.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className='text-zinc-500 hover:text-purple-500'
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              <li>
                <a
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Agendar horário pelo whatsapp'
                  onClick={() => setOpen(false)}
                  className='transition-all duration-300 hover:scale-103 py-2 px-5 rounded bg-purple-600 text-white w-fit'
                >
                  Agendar
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
