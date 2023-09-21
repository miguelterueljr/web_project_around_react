import usLogo from './images/around-the-us-logo.png';
import editPhotoProfile from './images/edit-photo-profile.png';
import jacquesCosteau from './images/jacques-costeau.jpg';
import buttonEdit from './images/button-edit.png';
import addButton from './images/add-button.png';

function App() {
  return (
    <div className='root'>
      {/*modal do edit-profile-->*/}
      <div class="modal">
        <button class="modal__button-close"><img src="<%=require('./images/close-icon.png')%>" alt="Icone em formato de fechar com um simbolo de X" /></button>
        <div class="modal__container">
          <h2 class="modal__title">Editar Perfil</h2>
          <form class="modal__form" novalidate>
            <div class="modal__input-separation">
              <input type="text" id="name-input" class="modal__input modal__input_name" placeholder="Digite o nome do Usuário" required minlength="2" maxlength="40" />
              <span class="name-input-error modal__input-error"></span>
            </div>
            <div class="modal__input-separation">
              <input type="text" id="job-input" class="modal__input modal__input_job" placeholder="Digite profissão do Usuário" required minlength="2" maxlength="200" />
              <span class="job-input-error modal__input-error"></span>
            </div>
            <button class="modal__button modal__button-save" type="submit">Salvar</button>
          </form>
        </div>
      </div>

      {/*<!--modal do adicionar card-->*/}
      <div class="modal modal-add">
        <button class="modal__button-close button-close"><img src="<%=require('./images/close-icon.png')%>" alt="Icone em formato de fechar com um simbolo de X" /></button>
        <div class="modal__container">
          <h2 class="modal__title">Novo Local</h2>
          <form class="modal__form modal__form_add" novalidate>
            <div class="modal__input-separation">
              <input type="text" id="title-input" class="modal__input modal__input_title" placeholder="Título" required minlength="2" maxlength="30" />
              <span class="title-input-error modal__input-error"></span>
            </div>
            <div class="modal__input-separation">
              <input type="url" id="url-input" class="modal__input modal__input_link" placeholder="URL da Imagem" required />
              <span class="url-input-error modal__input-error"></span>
            </div>
            <button class="modal__button modal__button-create" type="submit">Criar</button> 
          </form>
        </div>
      </div>

      {/*<!--modal das imagens quando clicadas-->*/}
      <div class="modal-image">
        <button class="modal-image__button"><img src="<%=require('./images/close-icon.png')%>" alt="Botão com imagem de x para fechar modal" /></button>
        <div class="modal-image__container">
          <img alt="imagem maximizada" class="modal-image__image" />
        </div>
        <h4 class="modal-image__title"></h4>
      </div>

      {/*<!--modal de confirmação de delete card-->*/}
      <div class="modal modal-delete">
        <button class="modal__button-close button-close modal__button-close_close"><img src="<%=require('./images/close-icon.png')%>" alt="Botão com imagem de x para fechar modal" /></button>
        <div class="modal__container">
          <h2 class="modal__title">Tem certeza ?</h2>
          <button class="modal__button modal__button-create modal__button_confirm" type="submit">Sim</button> 
        </div>
      </div>

      {/*<!--modal de alterar foto do perfil-->*/}
      <div class="modal modal_photo">
        <button class="modal__button-close button-close button-close-photo"><img src="<%=require('./images/close-icon.png')%>" alt="Icone em formato de fechar com um simbolo de X" /></button>
        <div class="modal__container">
          <h2 class="modal__title">Alterar a foto do perfil</h2>
          <form class="modal__form modal__form_add modal__form_editPhoto" novalidate>
            <div class="modal__input-separation">
              <input type="url" id="photo-input" class="modal__input modal__input_link modal__input_save-photo" placeholder="URL da Imagem" required />
              <span class="url-input-error modal__input-error"></span>
            </div>
            <button class="modal__button modal__button-create modal__button_save" type="submit">Salvar</button> 
          </form>
        </div>
      </div>
      

      <main class="page">
        <section class="header">
          <div class="header__logo">
            <img src={usLogo} alt="Logotipo around US" class="header__image" />
          </div>
          <hr class="header__line" />
        </section>

        <section class="profile">
          <div class="profile__container">
            <div class="profile__image-overlay">
              <img src={jacquesCosteau} alt="Foto JAcques Costeau" class="profile__image" />
              <img src={editPhotoProfile} alt="Simbolo de editar a foto do profile" class="profile__edit-picture" />
            </div>
          
            <div class="profile__info">
              <div class="profile__title">
                <h1 class="profile__name">Jacques Costeau</h1>
                <button class="button button-edit"><img src={buttonEdit} alt="Simbolo de um botão de editar" /></button>
                
              </div>
              <span class="profile__about">Explorar</span>
            </div>
          </div>
          <button class="button button-add">
            <img src={addButton} alt="Botão com o simbolo mais, para adicionar um card" />
          </button>
        </section>

        <section class="elements">
            
        </section>

        {/*<!--Template para o card-->*/}
        <template id="element" class="card-template">
          <article class="element">
            <img class="element__image" alt='template'/>
            <button class="element__delete"><img src="<%=require('./images/delete-icon.png')%>" alt="botão em formato de delete" /></button>
            <div class="element__text">
              <h3 class="element__title"></h3>
              <div class="element__text_liked">
                <button class="element__button"><img src="<%=require('./images/like-button.svg')%>" alt="Símbolo de curtir no formato de coração." class="element__button_image" /></button>
                <p class="element__number">0</p>
              </div>
            </div>
          </article>
        </template>
        
        <footer class="footer">
          <h4 class="footer__title">&copy; 2023 Around The U.S.</h4>
        </footer>

      </main>

    </div>
  );
}

export default App;
