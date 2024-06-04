import styled from "styled-components";

type CircleColor = "blue" | "green" | "red";     //aqui vamos criar um tipagem que vamos usar na div 


// Estilizando o elemento com base na cor selecionada
export const Circle = styled.div<{ color: CircleColor }>` // aqui tipamos a div <{}>
  padding: 10px;
  border-radius:10px ;
  background: ${({ color }) => color};    // aqui usamos interpolação de função
  //OBS esta interpolação tbm aceita condicionais ? :
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
`;