import './stylesDobraEspacial.scss';

export const Dobra_Espacial = () => {
  const vortex = []

  for (let i = 1; i <= 30; i++) {
    const classvortex = `vortex vortex-${i}`
    const linhas = []
    for (let j = 1; j <= 24; j++) {
      const classLinhas = `linhas linhas-${j}`
      linhas.push(<div key={j} className={classLinhas}></div>)
    }
    vortex.push(
      <div key={i} className={classvortex}>
        {linhas}
      </div>
    )
  }


  return (
    <div className='container_dobra_espacial'> 
      <div className="dobra">
       {vortex}
      </div>
    </div>
  )
}
