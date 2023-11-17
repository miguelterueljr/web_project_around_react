import { useState, useEffect, useContext } from 'react';

import editPhotoProfile from '../images/edit-photo-profile.png';
import buttonEdit from '../images/button-edit.png';
import addButton from '../images/add-button.png';

import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import CurrentUSerContext from '../contexts/CurrentUserContext';
import apiInstance from '../utils/api';

function Main(props) {
  //acesso valor do contexto atraves do hook useContext
  const currentUser = useContext(CurrentUSerContext);
  const initialCards = currentUser.initialCards;
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(currentUser.initialCards);
  }, [currentUser.initialCards]);

  const handleCardClick = (cardData) => {
    props.onCardClick(cardData);
  };


  //funcao like e dislike card
  function handleCardLike(card) {
    // Verifique mais uma vez se esse cartão já foi curtido
    const isLiked = card.likes.some(i => i._id === currentUser.currentUser._id);
    console.log(isLiked)
    console.log('anterior',card) // estado inicial

    // Envie uma solicitação para a API e obtenha os dados do cartão atualizados
    apiInstance.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      console.log('atualizado',newCard) //apos o curtir ou descurtir
      // Atualize o estado local dos cards com os novos dados
      setCards((state) =>
        state.map((c) => (c._id === card._id ? newCard : c))
      );
    });
  }

  //deletar cartoes
  function handleCardDelete(card) {
    // Envie uma solicitação para a API para excluir o cartão
    apiInstance.deleteCard(card._id)
      .then(() => {
        // Atualize o estado local dos cards excluindo o cartão deletado
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
    console.log('é pra ser deletado')
  }

  return (
    <div>
      <main className="page">
        <Header />
        <section className="profile">
          <div className="profile__container">
            <div className="profile__image-overlay" onClick={props.onEditAvatarClick}>
              <img src={currentUser.currentUser ? currentUser.currentUser.avatar: 'Loading'} alt="Foto JAcques Costeau" className="profile__image" />
              <img src={editPhotoProfile} alt="Simbolo de editar a foto do profile" className="profile__edit-picture" />
            </div>
            <div className="profile__info">
              <div className="profile__title">
                <h1 className="profile__name">{currentUser.currentUser ? currentUser.currentUser.name : 'Loading...'}</h1>
                <button className="button button-edit" onClick={props.onEditProfileClick}><img src={buttonEdit} alt="Simbolo de um botão de editar" /></button>
              </div>
              <span className="profile__about">{currentUser.currentUser ? currentUser.currentUser.about : 'Loading...'}</span>
            </div>
          </div>
          <button className="button button-add" onClick={props.onAddPlaceClick}>
            <img src={addButton} alt="Botão com o símbolo mais, para adicionar um card" />
          </button>
        </section>

        <section className="elements">
          {cards.map((cardData, index) => (
            <Card
              key={index}
              title={cardData.name}
              image={cardData.link}
              likes={cardData.likes}
              id={cardData._id}
              owner={cardData.owner}
              onCardClick={() => handleCardClick(cardData)}
              onCardLike={() => handleCardLike(cardData)}
              onCardDelete={() => handleCardDelete(cardData)}
              isLiked={cardData.likes.some(i => i._id === currentUser.currentUser._id)}
            />
          ))}
        </section>
        <Footer />
      </main>
    </div>
  )
  
}

export default Main;
