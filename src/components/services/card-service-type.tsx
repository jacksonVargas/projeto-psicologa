import { Brain, Users, Baby, Sparkles, HeartHandshake, Video } from 'lucide-react'

export interface CardServiceProps {
  icon: React.ReactNode
  title: string
  info: string
}

export const cards: CardServiceProps[] = [
  {
    icon: <Brain />,
    title: 'Terapia Individual',
    info: 'Sessões personalizadas para trabalhar questões como ansiedade, depressão, autoestima e autoconhecimento.'
  },
  {
    icon: <Users />,
    title: 'Terapia de Casal',
    info: 'Fortalecimento da comunicação e resolução de conflitos para relacionamentos mais saudáveis.'
  },
  {
    icon: <Baby />,
    title: 'Orientação Parental',
    info: 'Apoio para pais que buscam compreender e melhorar a relação com seus filhos.'
  },
  {
    icon: <Sparkles />,
    title: 'Gestão de Ansiedade',
    info: 'Técnicas e estratégias eficazes para lidar com crises de ansiedade e ataques de pânico.'
  },
  {
    icon: <HeartHandshake />,
    title: 'Luto e Perdas',
    info: 'Acolhimento e suporte emocional para enfrentar momentos de perda e transição.'
  },
  {
    icon: <Video />,
    title: 'Atendimento Online',
    info: 'Sessões remotas com a mesma qualidade e acolhimento do atendimento presencial.'
  }
]