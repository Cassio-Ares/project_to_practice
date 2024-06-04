import { useState } from "react"
import { Button, ButtonContainer, Circle } from "./styled"

type TypeColor = "blue" | "green" | "red"

export const Troca_com_styled_component = () => {
  const [color, setColor] = useState<TypeColor>('blue')

  // Função para garantir que apenas valores do tipo CircleColor sejam usados
  const changeColor = (newColor: TypeColor) => {
    setColor(newColor);
  }

  return (
    <>
        <Circle color={color}>Troca com Styled-components</Circle>
        <ButtonContainer>
          <Button onClick={()=> setColor('blue')}>Blue</Button>  {/** função de troca direto no elemento setColor('color') */}

          <Button onClick={()=> changeColor('green')}>Green</Button>  {/** função de troca externa ao elemento changeColor('color') */}

          <Button onClick={()=> setColor('red')}>Red</Button>
        </ButtonContainer>
    </>
  )
}
