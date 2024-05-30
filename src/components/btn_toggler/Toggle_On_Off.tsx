import './styled.css'
//import './style.scss'

export const Toggle_On_Off = () => {
  return (
    <div className='container_toggle'>
      <label htmlFor='toggle' className='label_toggle'>
        <input type='checkbox' id='toggle' className='check'/>
        <div className='slider slider--0'>ON</div>
        <div className='slider slider--1'>
            <div></div>
            <div></div>
        </div>
        <div className='slider slider--2'></div>
        <div className='slider slider--3'>OFF</div>
      </label>
    </div>
  );
}

