import { useState } from 'react'
import './styles.css'

export const Troca_Css = () => {
    const[clicked, setClicked] = useState(false)

   function handleClick() {
        setClicked(!clicked)
    }
  return (
    <button className={clicked ? 'btn clicked' : 'btn'} onClick={handleClick}>
       {clicked ? 'Novo Estilo' : 'Troca com CSS'}
    </button>
  )
}

/**
 * <button className={clicked ? 'button clicked' : 'button'} onClick={handleClick}>
 * Tradução: o button possui 2 className a Button  e a clicked as duas ligadas a uma condicional 
 *           para controlar esta condional criamos um state e uma função handle que vai mudar o state 
 *           {se state mudar(clicked para true)? usa a className clicked :ou a className 'button'}
 */