import React from 'react'
import Title from '@ui/Tittle'
import Text from '@ui/Text'
import TwoColumnText from '@/ui/TwoColumnText'

const DesvaloresSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
        Desvalores{' '}
      </Title>

      <div className="space-y-6 max-w-3xl mx-auto">
        <Text variant="medium" align="left" className="text-white block">
          Os desvalores servem como nossas fronteiras estratégicas; a linha
          clara que define o que recusamos a ser. Eles nos lembram diariamente
          que fomos criados para sermos o oposto do padrão, para rejeitar o
          mediano e para nos mantermos perpetuamente "revoltados".
        </Text>

        <TwoColumnText
          leftTitle="chatos"
          leftParagraph="Repudiamos o consenso e o pensamento de rebanho. A conformidade leva a resultados medianos e a uma comunicação indistinguível da concorrência. O caminho seguro é o caminho para a irrelevância."
          rightTitle="egoístas"
          rightParagraph='A satisfação é o fim do crescimento. Declaramos guerra à mentalidade de "dever cumprido". Celebrar o "bom" é se contentar com pouco. Para nós, cada resultado é apenas um novo ponto de partida para a próxima provocação.'
          gap="gap-12"
          titleClassName="text-white font-orbit-gate  uppercase font-normal mb-4"
          paragraphClassName="text-white font-switzer font-semibold"
        />
      </div>
    </>
  )
}

export default DesvaloresSection
