import './styled.css'

import { FaFacebookF, FaXTwitter, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa6";


export const Nav_Link_Contact = () => {
    return (
        <div className='Container_icon'>
            <div className='container_flex'>
                <div className='icons facebook'>
                    <div className='name'>Facebook</div>
                    <span className='faIcon faFacebook'> <FaFacebookF /></span>
                </div>

                <div className='icons xtwitter'>
                    <div className='name'>X</div>
                    <span className='faIcon faXtwitter'> <FaXTwitter /></span>
                </div>

                <div className='icons instagram'>
                    <div className='name'>Instagram</div>
                    <span className='faIcon faInstagram'> <FaInstagram /></span>
                </div>

                <div className='icons gitHub'>
                    <div className='name'>GitHub</div>
                    <span className='faIcon faGit'> <FaGithub /></span>
                </div>

                <div className='icons youtube'>
                    <div className='name'>YouTube</div>
                    <span className='faIcon faYoutube'> <FaYoutube /></span>
                </div>
            </div>

        </div>
    )
}
