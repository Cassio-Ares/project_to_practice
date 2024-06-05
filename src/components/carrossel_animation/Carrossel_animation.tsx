import './stylesCarrossel.css'

export const Carrossel_animation = () => {

    const numberOfCards = 3;
    const cardsNumber = Array.from({length: numberOfCards}, (_, i)=> i + 1);

  return (
    <div className='containerCarrossel'>
       <div className="center">
        {cardsNumber.map((num)=>(
            <div key={num} className={`card card-${num}`}>
            <div className="top"></div>
            <div className="content">{num}</div>
        </div>
        ))}
       </div>
    </div>
  )
}
