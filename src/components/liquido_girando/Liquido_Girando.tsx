import './stylesLiquido_girando.css';
//import './stylesLiquido_girando.scss';

export const Liquido_Girando = () => {
    const bolha = [];
    const spak = [];

    for (let i = 1; i <= 8; i++) {
        bolha.push(
            <div key={`bolha-${i}`} className={`bolha-${i}`} ></div>
        );
    }

    for (let i = 1; i <= 10; i++) {
        spak.push(
            <div key={`spak-${i}`} className={`spak-${i}`}></div>
        );
    }

    return (
        <div className='container_liquido'>
            <div className="center">
                <div className="ball"></div>
                    {bolha}
                    {spak}
            </div>
        </div>
    )
}
