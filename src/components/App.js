import { useState, useEffect } from 'react';
/*Importação dos componentes*/
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import apiInstance from '../utils/api';
import CurrentUSerContext from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen ] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)
  const [currentUser, setCurrentUser] = useState(null);
  const [initialCards, setInitialCards] = useState([]);

  //faço a chamada a minha classe api e atribuo seu valor a variavel currentUser
  useEffect(() => {
    apiInstance.getProfile()
      .then(userData => {
        setCurrentUser(userData);
      })
      .catch(error => {
        console.error("Erro ao buscar o perfil do usuário:", error);
      });

    //aqui to puxando do arquivo api o fetchInitialCards  
    apiInstance.fetchInitialCards()
      .then(cardData => {
        setInitialCards(cardData); // Atualize o estado com os cards iniciais
      })
      .catch(error => {
        console.error("Erro ao buscar os cards iniciais:", error);
      });  
  }, []);

  //funcao de adicionar ou remover opacidade
  const togglePageOpacity = () => {
    const page = document.querySelector('.page');
    page.classList.toggle('page_opacity');
  }
  

  //abre o modal para editar a foto do avatar
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
    togglePageOpacity();
  }

  //abre modal para editar os dados do perfil
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
    togglePageOpacity();
  }

  //abre modal para adicionar um card
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
    togglePageOpacity();
  }

  const handleCardClick = (cardData) => {
    setSelectedCard(cardData);
    togglePageOpacity()
  };

  //funcao para fechar os pop-ups
  const closeAllPopups = () => {
    togglePageOpacity();
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null)
    
  };

  const handleUpdateUser = (userData) => {
    apiInstance.setUserInfo(userData)
      .then(updatedUser => {
        setCurrentUser(updatedUser);
        closeAllPopups();
      })
      .catch(error => {
        console.error("Erro ao atualizar o perfil do usuário:", error);
      });
  };

  const handleUpdateAvatar = (userData) => {
    apiInstance.setUserAvatar(userData)
      .then(updateAvatar => {
        setCurrentUser(updateAvatar)
        closeAllPopups()
      })
      .catch(error => {
        console.error("Erro ao atualiar a foto do avatar", error)
      })
  }
  
  return (
    <CurrentUSerContext.Provider value={{currentUser, initialCards}}>
      <div className='root'>
        {/*modal do edit-profile-->*/}
        <EditProfilePopup 
          isOpen={isEditProfilePopupOpen} 
          onClose = {closeAllPopups} 
          onUpdateUser={handleUpdateUser}
        />

        {/*<!--modal do adicionar card-->*/}

        <PopupWithForm name='modal-add' buttonclose='button-close' title='Novo Local' isOpen = {isAddPlacePopupOpen} onClose = {closeAllPopups}>
          <form className="modal__form modal__form_add" noValidate>
            <div className="modal__input-separation">
              <input type="text" id="title-input" className="modal__input modal__input_title" placeholder="Título" required minLength="2" maxLength="30" />
              <span className="title-input-error modal__input-error"></span>
            </div>
            <div className="modal__input-separation">
              <input type="url" id="url-input" className="modal__input modal__input_link" placeholder="URL da Imagem" required />
              <span className="url-input-error modal__input-error"></span>
            </div>
            <button className="modal__button modal__button-create" type="submit">Criar</button> 
          </form>
        </PopupWithForm>

        {/*<!--modal de confirmação de delete card-->*/}
        <PopupWithForm name='modal-delete' buttonclose='button-close' buttonclassetwo='modal__button-close_close' title='Tem certeza ?'>
          <button className="modal__button modal__button-create modal__button_confirm" type="submit">Sim</button> 
        </PopupWithForm>

        {/*<!--modal de alterar foto do perfil-->*/}
        <EditAvatarPopup 
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <Main 
          onEditProfileClick = {handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick= {handleEditAvatarClick}
          onCardClick={handleCardClick}
          initialCards={initialCards}
        />

      </div>
    </CurrentUSerContext.Provider>
  );
}

export default App;
