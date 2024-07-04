import './stylesCarrosselDePalavras.css';

export const Carrossel_de_palavras = () => {
    return (
        <div className='container_carrossel_palavras'>
            <div className="carrossel_palavras_center">
                <div className="carrossel_palavras">
                    <div className="palavras_fixas">Eu sou um</div>
                    <div className="container_carrossel_outras">
                        <div className="container_carrossel">
                          <div className="palavras">teste 1</div>
                          <div className="palavras">teste 2</div>
                          <div className="palavras">teste 3</div>
                          <div className="palavras">teste 4</div>
                          <div className="palavras">teste 1</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
