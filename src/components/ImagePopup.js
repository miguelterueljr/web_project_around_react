function ImagePopup() {
  return (
    <>
      {/*<!--modal das imagens quando clicadas-->*/}
      <div className="modal-image">
        <button className="modal-image__button"><img src="<%=require('./images/close-icon.png')%>" alt="Botão com imagem de x para fechar modal" /></button>
        <div className="modal-image__container">
          <img alt="imagem maximizada" className="modal-image__image" />
        </div>
        <h4 className="modal-image__title"></h4>
      </div>
    </>
  )
}

export default ImagePopup;