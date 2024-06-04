import './styles.css'

export const Galery_Social = () => {
    
    return (
        <div className='container'> {/* // /**frame */}
            <div className="profile" id='profile-1'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ02mof1BT5P7qOliU3-5MFdlN59V6yzB6vnw&s" alt="" />
                <div className="overlay"></div>
                <div className="plus"></div>
            </div>
            <div className="profile" id='profile-2'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ02mof1BT5P7qOliU3-5MFdlN59V6yzB6vnw&s" alt="" />
                <div className="overlay"></div>
                <div className="plus"></div>
            </div>
            <div className="profile" id='profile-3'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ02mof1BT5P7qOliU3-5MFdlN59V6yzB6vnw&s" alt="" />
                <div className="overlay"></div>
                <div className="plus"></div>
            </div>
            <div className="profile" id='profile-4'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ02mof1BT5P7qOliU3-5MFdlN59V6yzB6vnw&s" alt="" />
                <div className="overlay"></div>
                <div className="plus"></div>
            </div>

            <div className="detail" id="detail_1">
                <div className="close"></div>
                <img src="https://static.preparaenem.com/2022/08/paisagem-natural-suica.jpg" alt="" className="header" />

                <div className='image'>
                    <img src='https://100dayscss.com/codepen/13-1.jpg' alt='' />
                </div>

                <div className="infos">
                    <div className="name">Cassio</div>
                    <div className="action">
                        <div className='btn'>
                            <span className='fa fa-phone'></span>
                        </div>
                        <div className='btn'>
                            <span className='fa fa-comment'></span>
                        </div>
                        <div className='btn'>
                            <span className='fa fa-heart'></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


