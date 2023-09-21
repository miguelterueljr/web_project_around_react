/*Importação dos componentes*/
import Main from './Main';

/*importaçao das imagens usadas*/
import buttonClose from '../images/close-icon.png';


function App() {
  return (
    <div className='root'>
      {/*modal do edit-profile-->*/}
      <div className="modal">
        <button className="modal__button-close"><img src={buttonClose} alt="Icone em formato de fechar com um simbolo de X" /></button>
        <div className="modal__container">
          <h2 className="modal__title">Editar Perfil</h2>
          <form className="modal__form" novalidate>
            <div className="modal__input-separation">
              <input type="text" id="name-input" className="modal__input modal__input_name" placeholder="Digite o nome do Usuário" required minlength="2" maxlength="40" />
              <span className="name-input-error modal__input-error"></span>
            </div>
            <div className="modal__input-separation">
              <input type="text" id="job-input" className="modal__input modal__input_job" placeholder="Digite profissão do Usuário" required minlength="2" maxlength="200" />
              <span className="job-input-error modal__input-error"></span>
            </div>
            <button className="modal__button modal__button-save" type="submit">Salvar</button>
          </form>
        </div>
      </div>

      {/*<!--modal do adicionar card-->*/}
      <div className="modal modal-add">
        <button className="modal__button-close button-close"><img src={buttonClose} alt="Icone em formato de fechar com um simbolo de X" /></button>
        <div className="modal__container">
          <h2 className="modal__title">Novo Local</h2>
          <form className="modal__form modal__form_add" novalidate>
            <div className="modal__input-separation">
              <input type="text" id="title-input" className="modal__input modal__input_title" placeholder="Título" required minlength="2" maxlength="30" />
              <span className="title-input-error modal__input-error"></span>
            </div>
            <div className="modal__input-separation">
              <input type="url" id="url-input" className="modal__input modal__input_link" placeholder="URL da Imagem" required />
              <span className="url-input-error modal__input-error"></span>
            </div>
            <button className="modal__button modal__button-create" type="submit">Criar</button> 
          </form>
        </div>
      </div>

      {/*<!--modal das imagens quando clicadas-->*/}
      <div className="modal-image">
        <button className="modal-image__button"><img src="<%=require('./images/close-icon.png')%>" alt="Botão com imagem de x para fechar modal" /></button>
        <div className="modal-image__container">
          <img alt="imagem maximizada" className="modal-image__image" />
        </div>
        <h4 className="modal-image__title"></h4>
      </div>

      {/*<!--modal de confirmação de delete card-->*/}
      <div className="modal modal-delete">
        <button className="modal__button-close button-close modal__button-close_close"><img src="<%=require('./images/close-icon.png')%>" alt="Botão com imagem de x para fechar modal" /></button>
        <div className="modal__container">
          <h2 className="modal__title">Tem certeza ?</h2>
          <button className="modal__button modal__button-create modal__button_confirm" type="submit">Sim</button> 
        </div>
      </div>

      {/*<!--modal de alterar foto do perfil-->*/}
      <div className="modal modal_photo">
        <button className="modal__button-close button-close button-close-photo"><img src={buttonClose} alt="Icone em formato de fechar com um simbolo de X" /></button>
        <div className="modal__container">
          <h2 className="modal__title">Alterar a foto do perfil</h2>
          <form className="modal__form modal__form_add modal__form_editPhoto" novalidate>
            <div className="modal__input-separation">
              <input type="url" id="photo-input" className="modal__input modal__input_link modal__input_save-photo" placeholder="URL da Imagem" required />
              <span className="url-input-error modal__input-error"></span>
            </div>
            <button className="modal__button modal__button-create modal__button_save" type="submit">Salvar</button> 
          </form>
        </div>
      </div>

      <Main />

    </div>
  );
}

export default App;
