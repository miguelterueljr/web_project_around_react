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

  //botei agora e ta me mostrnado no console os cards
  const initialCards = currentUser.initialCards;
  console.log(initialCards)
  
  
  const handleCardClick = (cardData) => {
    props.onCardClick(cardData);
  };

  //preciso fazer uma chamada ao apiInstance
  //dentro da Api criar os metodos para adicionar a curtida ao like e descurtida(put e delete)
  //funcao do like e dislike, aind tenho q descobrir o que vai ser esse card, sera que realmente preciso charmar um card ? 
  function handleCardLike(card) {
    // Verifique mais uma vez se esse cartão já foi curtido
    const isLiked = card.likes.some(i => i._id === currentUser.currentUser._id);

    //chama metodo na api para curtir e descurtir
     // Chama método na api para curtir e descurtir
    apiInstance.changeLikeCardStatus(card._id, !isLiked)
      .then(updatedCard => {
        // Atualizar o estado do card com o card atualizado pela API
        // Aqui, você pode usar o retorno da API para atualizar seu estado local, se necessário

        
        console.log('Card atualizado:', updatedCard);
      })
      .catch(error => {
        // Lidar com erros, se necessário
        console.error('Erro ao curtir/descurtir o card:', error);
      });

    //verfica no console o que aparece, se so deixar currentUSer vc ve tudo util para testar a logica dessa funcao
    console.log(currentUser.currentUser._id)
    console.log(currentUser.initialCards)
    console.log('Cartão já foi curtido?', isLiked);
   
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
          {initialCards.map((cardData, index) => (
            <Card
              key={index}
              title={cardData.name}
              image={cardData.link}
              likes={cardData.likes}
              id={cardData._id}
              owner={cardData.owner}
              onCardClick={() => handleCardClick(cardData)}
              onCardLike = {() => handleCardLike(cardData)}
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
