import './stylesTabPreco.css';

export const Tabela_de_Precos = () => {
    return (
        <div className="container_tabela_de_preco">

            <div className="plano bco">
                <div className="title">Básico</div>
                <div className="price"> R$5<span>por mês</span></div>
                <div className="linhas">
                    <div className="linha" style={{ width: "69px" }}></div>
                    <div className="linha" style={{ width: "59px" }}></div>
                    <div className="linha" style={{ width: "66px" }}></div>
                    <div className="linha" style={{ width: "46px" }}></div>
                </div>
            </div>

            <div className="plano pro">
                <div className="title">Pro</div>
                <div className="price"> R$10<span>por mês</span></div>
                <div className="linhas">
                    <div className="linha" style={{ width: "69px" }}></div>
                    <div className="linha" style={{ width: "59px" }}></div>
                    <div className="linha" style={{ width: "66px" }}></div>
                    <div className="linha" style={{ width: "46px" }}></div>
                </div>
            </div>

            <div className="plano premium">
                <div className="title">Premium</div>
                <div className="price"> R$15<span>por mês</span></div>
                <div className="linhas">
                    <div className="linha" style={{ width: "69px" }}></div>
                    <div className="linha" style={{ width: "59px" }}></div>
                    <div className="linha" style={{ width: "66px" }}></div>
                    <div className="linha" style={{ width: "46px" }}></div>
                </div>
            </div>

            <div className="datas">

                <div className="data users">
                    <div className="text_plan">
                        <span className="left">5 Users</span>
                        <span className="right">100 Users</span>
                    </div>
                    <div className="line">
                        <div className="fill"></div>
                    </div>
                </div>

                <div className="data gb">
                    <div className="text_plan">
                        <span className="left">20 GB</span>
                        <span className="right">200 GB</span>
                    </div>
                    <div className="line">
                        <div className="fill"></div>
                    </div>
                </div>

                <div className="data projects">
                    <div className="text_plan">
                        <span className="left">1 Project</span>
                        <span className="right">50 Projects</span>
                    </div>
                    <div className="line">
                        <div className="fill"></div>
                    </div>
                </div>

            </div>
        </div>


    )
}
