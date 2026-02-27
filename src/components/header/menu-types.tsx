export interface MenuProps {
  href: string
  label: string
  onClick?: () => void
}

export const links: MenuProps[] = [
  {
    href: '#hero',
    label: 'Início'
  },
  {
    href: '#about',
    label: 'Sobre'
  },
  {
    href: '#services',
    label: 'Serviços'
  },
  {
    href: '#contact',
    label: 'Contato'
  }
]