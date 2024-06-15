import './styles_hover_diagonal.css';

export const Card_Hover_Diagonal_Show = () => {
  return (
    <div className='container_hover_diagonal'>
         <figure className="container_hover_diagonal_card">
            <img className='image_hover_diagonal_card' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQE5SD-CluNafqQbA3s-fruMgtjJt4oo3MfA&s" alt=""/>
            <figcaption className='figcaption_hover_diagonal_card'>
                <h3 className='title_diagonal_card'>Wolf</h3>
            </figcaption>
            {/* <a href=""></a> */}
        </figure>

        <figure className="container_hover_diagonal_card">
            <img className='image_hover_diagonal_card' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGYtUZpgYu4RHAwUN-A0zZ5khsfAFL9lVcsg&s" alt=""/>
            <figcaption className='figcaption_hover_diagonal_card'>
                <h3 className='title_diagonal_card'>Dragon</h3>
            </figcaption>
            {/* <a className='link_hover_diagonal_card' href=""></a> */}
        </figure>
    </div>
  )
}
