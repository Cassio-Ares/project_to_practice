'use client'

//import './styled.css';
import './style.scss';

export const CardHover = () => {
    const divs = [];

    for (let i = 0; i <= 200; i++) {
        divs.push(
            <div key={i} className={`trigger trigger-${i}`} onClick={() => console.log(`Clicou na div ${i}`)}>

            </div>
        );
    }
    return (
        <div className="frame">
            {divs}
            <div className='plane'>
                <div className='text-front'> HOVER  </div>
                <div className='text-back'> hover</div>
            </div>
        </div>
    )
}

{/*       O codigo acima é uma replica deste codigo 
            
   -for i in (0..200)
   		div class="trigger trigger-#{i}" onclick="void(0);"
   	.plane
 		.text-front HOVER
 	.text-back HOVER


             // ou repica deste codigo 

<div class="frame">
  <div class="trigger trigger-0" onclick="void(0);"></div>
  <div class="trigger trigger-1" onclick="void(0);"></div>
  <div class="trigger trigger-2" onclick="void(0);"></div>
  <div class="trigger trigger-3" onclick="void(0);"></div>
  <div class="trigger trigger-4" onclick="void(0);"></div>
  <div class="trigger trigger-5" onclick="void(0);"></div>..... */}