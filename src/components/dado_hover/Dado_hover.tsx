import './stylesDadoHover.css'

export const Dado_hover = () => {
    
    return (
        <div className='container_dado_hover'>
            <div className='center_dado'>
                <div className='cube'>
                    <div className='lados frente'></div>
                    <div className='lados atras'></div>
                    <div className='lados direita'></div>
                    <div className='lados esquerda'></div>
                    <div className='lados top'></div>
                    <div className='lados baixo'></div>
                </div>
            </div>
        </div>
    )
}
