'use client'


import './styles.css'

export const Btn_ConfirmV = () => {
    return (
     
            <div className='container_btn'> 
               <input type="checkbox" className='check_box' id='button' /> 
                  <label htmlFor='button' className='button'>
                Confirmar<img src="https://100dayscss.com/codepen/checkmark-green.svg" className='image' />
                  </label>
              <svg className="cicle">
                <circle cx="30" cy="30" r="29" />
               </svg>
            </div>
       
       
    )
}

    // <input type="checkbox" className='check_box' />  opção sem usar id 
    // id neste projeto serve com ancora ao seletor css ~ caso queira fazer sem id 
    // use o seletor css + para selecionar o primeiro irmão direto 