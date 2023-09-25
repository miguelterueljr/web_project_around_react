import buttonClose from '../images/close-icon.png';

function PopupWithForm(props) {
  console.log(props)
  return (
    <>
      {/*dessa maneira eu tenho uma classe comum e envio uma extra via props*/}
      <div className={`modal ${props.name} ${props.isOpen ? 'modal-opened' : ''}`}>
        <button className={`modal__button-close ${props.buttonclose} ${props.buttonclassetwo}`} onClick={props.onClose}><img src={buttonClose} alt='Icone em formato de x, simbolizando fechar' /></button>
        <div className='modal__container'>
          <h2 className='modal__title'>{props.title}</h2>
          {props.children}
        </div>
      </div>
    </>
  )
}

export default PopupWithForm;