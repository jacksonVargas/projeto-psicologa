import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react'

export interface IconProps {
  icon: React.ReactNode
  name: string
  info: string
}

export const icons: IconProps[] = [
  {
    icon: <Phone size={20} />,
    name: 'WhatsApp',
    info: '(11) 99999-9999'
  },
  {
    icon: <Mail size={20} />,
    name: 'Email',
    info: 'contato@dracarolina.com.br'
  },
  {
    icon: <MapPin size={20} />,
    name: 'Endereço',
    info: 'Av. Paulista, 1000 — São Paulo, SP'
  },
  {
    icon: <Clock size={20} />,
    name: 'Horário',
    info: 'Seg–Sex, 8h às 20h'
  },
  {
    icon: <Instagram size={20} />,
    name: 'Instagram',
    info: '@dra.carolinamendes'
  },
]