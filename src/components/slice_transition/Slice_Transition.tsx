import './styled.css';
//import './styled.scss';

export const Slice_Transition = () => {
  return (
    <div className='container'>
        <div className='slices' onClick={()=>{}}>
            {Array.from({length: 8}, (_, i)=>(
                <div key={i + 1} className={`slice slice-${i + 1}`}></div>
            ))}
        </div>
        <div className="text">
        <h1 className='sliceTitle'>Slice</h1>
        <h2 className='sliceText'>transition</h2>
      </div>
    </div>
  )
}

/**
 * onClick={()=>{}} evento de clique que não faz nada 
 * 
 * Array.from({length: 8}, gera uma array de 8 elementos  
 * Array.from(array, map func); cria uma elemento similar a um array / map opcional que permite iterar o array 
 * 
 * key={i + 1} cria uma key para cada div 
 * 
 * className={`slice slice-${i + 1} cria classNames diferentes para cada div
 */

/**
 * <div class="container">
  <div class="slices" onclick="void(0);">
    <div class="slice slice-1"></div>
    <div class="slice slice-2"></div>
    <div class="slice slice-3"></div>
    <div class="slice slice-4"></div>
    <div class="slice slice-5"></div>
    <div class="slice slice-6"></div>
    <div class="slice slice-7"></div>
    <div class="slice slice-8"></div>
    <div class="text">
      <h1>
        Slice 
      </h1>
      <h2>
        transition
      </h2>
    </div>
  </div>
</div>
 */