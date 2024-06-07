import './stylesSeguindoMouse.css'
//import './stylesSeguindoMouse.scss'

export const Elemento_seguindo_mouse = () => {
    const contents = []
   
      for(let i = 1; i <= 400; i++){
       contents.push(<div key={i}  className={`content content-${i}`}></div>)  
      //  
      }

      // lembrar de usar key no pois melhora a qualidade do codigo e o react renderiza com mais qualidade

  return (
    <div className='containerPerseguidor'>
        {contents}
        <div className="mouseFollow"></div>
    </div>
  )
}

/**
 * para conseguir calcular e compreender melhor como o elemento busca o mouse 
 * use e apague a  opacity: 0; de .content
 *  
 *   contents.push(<div key={i}  className={`content content-${i}`}>{i},</div>) 
 *   com {i} dentro que mostrará a posição de cada div mostrando pq dos valores em cada  
 *   content-{i}:hover~ .mouseFollow{
 *    transform: translate3d(10px, 10px, 0);
 * }
 *   e pq de cada valor em translated3d de content-1 é 10 no x e 10 no y e assim sucessivemente  
 * 
 *
 *
 */