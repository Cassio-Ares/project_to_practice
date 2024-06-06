import './stylesSeguindoMouse.css'

export const Elemento_seguindo_mouse = () => {
    const contents = []
   
      for(let i = 1; i <= 400; i++){
       contents.push(<a key={i}  className={`content content-${i}`}></a>)  
      }

      // lembrar de usar key no pois melhora a qualidade do codigo e o react renderiza com mais qualidade

  return (
    <div className='containerPerseguidor'>
        {contents}
        <div className="mouseFollow"></div>
    </div>
  )
}
