import './stylesDobraEspacial.scss';

export const Dobra_Espacial = () => {
  let vortex = []
  let linhas = []

  for(let i = 1; i <= 30; i++){
    vortex.push(
        <div key={`vortex-${i}`} className={`vortex  vortex-${i}`} ></div>
    )
  }

  for(let i = 1; i <= 24; i++){
    linhas.push(
        <div key={`linhas-${i}`} className={`linhas linhas-${i}`}></div>
    )
  }

  return (
    <div className='container_dobra_espacial'>
        <div className="dobra">
           {vortex}
           {linhas}
        </div>
    </div>
  )
}
