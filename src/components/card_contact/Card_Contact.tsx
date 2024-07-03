import './stylesCardContact.css'
import { FaXTwitter, FaInstagram, FaGithub } from "react-icons/fa6";

export const Card_Contact = () => {
   return (
      <div className='container_Card_contact'>
         <figure className="card_card_contact">
            <img className='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVpSj1Qj4sZ6K0UlFmL7-qEI3XjUka2RokoQ&s" alt="" />
            <figcaption className='figcaption'>
               <h3 className='name'>Gyomei Himejima</h3>
               <div className='icons'>
               <div className='iconFa' ><FaXTwitter /></div>
                  <div className='iconFa' ><FaGithub /></div>
                  <div className='iconFa' ><FaInstagram /></div>
               </div>
            </figcaption>
         </figure>
         
         <figure className="card_card_contact">
            <img className='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYHrn39otQZKEy9TpuGh_tVdcctnnpJaAPXQ&s" alt="" />
            <figcaption className='figcaption'>
               <h3 className='name'>Tengen Uzui</h3>
               <div className='icons'>
                  <div className='iconFa' ><FaXTwitter /></div>
                  <div className='iconFa' ><FaGithub /></div>
                  <div className='iconFa' ><FaInstagram /></div>
               </div>
            </figcaption>
         </figure>
      </div>
   )
}
