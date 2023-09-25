import { useState } from 'react';
/*Importação dos componentes*/
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen ] = useState(false)


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

  //funcao para fechar os pop-ups
  const closeAllPopups = () => {
    togglePageOpacity();
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    
  };
  
  return (
  
    <div className='root'>

      {/*modal do edit-profile-->*/}
      <PopupWithForm title='Editar Perfil' isOpen = {isEditProfilePopupOpen} onClose = {closeAllPopups}>
        <form className="modal__form" noValidate>
          <div className="modal__input-separation">
            <input type="text" id="name-input" className="modal__input modal__input_name" placeholder="Digite o nome do Usuário" required minLength="2" maxLength="40" />
            <span className="name-input-error modal__input-error"></span>
          </div>
          <div className="modal__input-separation">
            <input type="text" id="job-input" className="modal__input modal__input_job" placeholder="Digite profissão do Usuário" required minLength="2" maxLength="200" />
            <span className="job-input-error modal__input-error"></span>
          </div>
          <button className="modal__button modal__button-save" type="submit">Salvar</button>
        </form>
      </PopupWithForm>

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
      <PopupWithForm name='modal_photo' buttonclose='button-close' buttonclassetwo='button-close-photo' title='Alterar a foto do perfil' isOpen={isEditAvatarPopupOpen} onClose = {closeAllPopups}>
        <form className="modal__form modal__form_add modal__form_editPhoto" noValidate>
          <div className="modal__input-separation">
            <input type="url" id="photo-input" className="modal__input modal__input_link modal__input_save-photo" placeholder="URL da Imagem" required />
            <span className="url-input-error modal__input-error"></span>
          </div>
          <button className="modal__button modal__button-create modal__button_save" type="submit">Salvar</button> 
        </form>
      </PopupWithForm>

      <ImagePopup />

      <Main 
        onEditProfileClick = {handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick= {handleEditAvatarClick}
        onCardClick='' //aqui falta ainda configurar
      
      />

    </div>
  );
}

export default App;
