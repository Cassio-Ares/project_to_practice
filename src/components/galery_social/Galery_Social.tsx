import { useState } from 'react';
//import './stylesGalery.css';
import './stylesGalery.scss';

import { FaPhone, FaComment,FaHeart } from "react-icons/fa6";

export const  Galery_Social = () => {
    const [isDetailActive, setDetailActive] = useState(false);

    const handleProfileClick = () => {
        setDetailActive(true);
    };

    const handleCloseClick = () => {
        setDetailActive(false);
    };

    return (
        <div className='container'>
            <div className="profile" onClick={handleProfileClick}>
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhF8INWtLSA-2t8kI9RvSoDUSkLRIphCrvJ7jsAz_nQaUXNqRpE8sHbUVcTRW72O8H2KBwWleZf4zNY7UR4LFnDEInlFiTn3HruAOZMOJRE5rQH6kEQEiT1J2ttMOgZLgSmMtx33oKJNCs/s320/CodeGeass_Lelouch1.jpg" alt="" />
                <div className="overlay"></div>
                <div className="plus"></div>
            </div>
            <div className="profile" id='profile-2'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ02mof1BT5P7qOliU3-5MFdlN59V6yzB6vnw&s" alt="" />
                <div className="overlay"></div>
                <div className="plus"></div>
            </div>
            <div className="profile" id='profile-3'>
                <img src="https://pm1.aminoapps.com/6476/b97b7b8157934c37f5cd3e7a57100e1e9cec7469_hq.jpg" alt="" />
                <div className="overlay"></div>
                <div className="plus"></div>
            </div>
            <div className="profile" id='profile-4'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ02mof1BT5P7qOliU3-5MFdlN59V6yzB6vnw&s" alt="" />
                <div className="overlay"></div>
                <div className="plus"></div>
            </div>

            <div className={`detail ${isDetailActive ? 'active' : ''}`} id="detail_1" >
                <div className="close" onClick={handleCloseClick}></div>
               
                <img src="https://static.preparaenem.com/2022/08/paisagem-natural-suica.jpg" alt="" className="header" />

                <div className='image'>
                    <img src='https://i.pinimg.com/564x/4b/b3/e2/4bb3e23730ce021044ea66eeaf85a401.jpg' alt='' />
                </div>

                <div className="infos">
                    <div className="name">Lelouch Vi Britannia</div>
                    <div className="action">
                        <div className='btn'>
                            <span className='fa fa-phone'><FaPhone/></span>
                        </div>
                        <div className='btn'>
                            <span className='fa fa-comment'><FaComment/></span>
                        </div>
                        <div className='btn'>
                            <span className='fa fa-heart'><FaHeart/></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



