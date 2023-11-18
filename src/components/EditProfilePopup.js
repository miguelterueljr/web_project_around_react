import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {

  const [value, setValue] = useState('')

  function handleChange(evt) {
    setValue(evt.target.value)
  }
//colocar o onChange la no input
//isso que se chama gerenciador de estados  

  return (
    <PopupWithForm title='Editar Perfil' isOpen = {props.isOpen} onClose = {props.onClose}>
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
  )
}

export default EditProfilePopup;  