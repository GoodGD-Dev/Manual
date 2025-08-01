import React from 'react'
import Title from '../../ui/Tittle'
import Text from '../../ui/Text'

const InimigoSection: React.FC = () => {
  return (
    <>
      <Title variant="large" align="left" className="text-white">
        Inimigo
      </Title>

      <div className="space-y-6">
        <Text variant="large" align="left" className="text-white block">
          Nosso inimigo não é uma empresa. É uma ideia: a zona de conforto.
          Combatemos a mentalidade do "resultado mediano", o jargão corporativo
          que mascara a inércia e o modelo de agência que se preocupa mais em
          vender a si mesma do que em gerar lucro para o cliente.
        </Text>
        <Text variant="large" align="left" className="text-white block">
          Nosso adversário é a satisfação, a crença perigosa de que o que é
          "bom" é suficiente. Nós existimos para provar que nunca é.
        </Text>
      </div>
    </>
  )
}

export default InimigoSection
