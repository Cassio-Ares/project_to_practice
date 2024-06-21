import styled from 'styled-components'
import BoxMUI from '@mui/material/Box';

export const Container_text = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    position: relative; 
`;

export const H1 = styled.h1`
 margin-bottom: 20px;
 font-size: 40px;
`;

export const P = styled.p`
  font-size: 20px;
`;


export const Git_Link = styled.a`
  background: #2a2b2c;
  border-radius: 10px;
  padding: 15px;
  position: absolute;
  right: 80px;
  top: 150px;
  color: white;
  
  &:hover{
    background:  #1574d5;
    box-shadow: 0 0 5px, 0 0 25px  #1574d5, 0 0 50px  #1574d5, 0 0 400px  #1574d5;
    -webkit-box-reflect: below 5px linear-gradient(transparent, #0005);
  }
`;

export const Box_Container = styled(BoxMUI)`
  box-sizing: border-box;
  margin: 120px 50px 0 30px;
`;