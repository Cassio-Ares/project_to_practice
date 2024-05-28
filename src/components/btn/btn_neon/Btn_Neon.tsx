
import './style.css'


export const Btn_Neon = () => {
    return (
        
            <div className='btn_neon-container'>
                <a href='#'>  {/*nth-child(1) da div */}
                    <span></span> {/* a span: nth-child(1) */}
                    <span></span> {/* a span: nth-child(2) */}
                    <span></span> {/* a span: nth-child(3) */}
                    <span></span> {/* a span: nth-child(4) */}
                    btn_neon1
                </a>

                <a href='#'>  {/* nth-child(2) da div */}
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    btn_neon2
                </a>

                <a href='#'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    btn_neon3
                </a> {/* nth-child(3) da div */}


            </div>
     

    )
}

