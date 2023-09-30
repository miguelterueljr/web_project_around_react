import deleteIcon from '../images/delete-icon.png'
import likeButton from '../images/like-button.svg'

function Card (props) {
  return (
    <article className="element">
      <img className="element__image" alt={`Imagem de ${props.title}`} src={props.image}/>
      <button className="element__delete">
        <img src={deleteIcon} alt="botão em formato de delete" />
      </button>
      <div className="element__text">
        <h3 className="element__title">{props.title}</h3>
        <div className="element__text_liked">
          <button className="element__button">
            <img src={likeButton} alt="Símbolo de curtir no formato de coração." className="element__button_image" />
          </button>
          <p className="element__number">{props.likes.length}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;