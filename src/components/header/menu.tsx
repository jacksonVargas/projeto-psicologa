'use client'

// Hooks
import { useState, useEffect, useRef } from 'react'
import { links } from './menu-types'
import { Menu, X } from 'lucide-react'

export function MenuItems() {
  const [open, setOpen] = useState<boolean>(false)
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

  return (
    <>
      <header className='w-full bg-white/80 backdrop-blur-sm fixed z-99 top-0 shadow-sm'>
        <nav className='max-w-6xl mx-auto py-2 px-5 flex justify-between items-center'>
          <a href='#' className='text-xl md:text-2xl font-semibold'>
            Dra. <span className='text-cyan-600'>Carolina</span>
          </a>

          <button
            type='button'
            onClick={() => setOpen(!open)}
            className='text-cyan-500 md:hidden'
          >
            {open ? <X size={25} /> : <Menu size={25} />}
          </button>
          
          {/* Desktop */}
          <ul className='hidden md:flex items-center gap-6'>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className='text-zinc-500 hover:text-cyan-600 md:text-sm'
              >
                {link.label}
              </a>
            ))}

            <a
              href='#'
              target='_blank'
              onClick={() => setOpen(false)}
              className='md:text-sm transition-all duration-300 hover:scale-103 py-2 px-5 rounded bg-cyan-600 text-white w-fit'
            >
              Agendar
            </a>
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
              Dra. <span className='text-cyan-600'>Carolina</span>
            </a>

            <ul className='grid gap-5'>
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className='text-zinc-500 hover:text-cyan-600'
                >
                  {link.label}
                </a>
              ))}

              <a
                href='#'
                target='_blank'
                onClick={() => setOpen(false)}
                className='transition-all duration-300 hover:scale-103 py-2 px-5 rounded bg-cyan-600 text-white w-fit'
              >
                Agendar
              </a>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
