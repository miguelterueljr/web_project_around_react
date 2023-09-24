import buttonClose from '../images/close-icon.png';

//aqui é meio que pra criar do zero nao preciso copiar o javascript do outro projeto, vou refazer em react
//todos modais tem a classe modal, menos o de aumentar a imagem quando clicada porque realmenet nao é para aqui
//criarei um componente que sera reutilizado de diferentes formas atraves de props e props.children
//de fato ele tem praticamente o mesmo molde para os 4 modais

//componente dos meus modais .... o props é o que nao é comum aos 4 modais
function PopupWithForm(props) {
  return (
    <>
      {/*dessa maneira eu tenho uma classe comum e envio uma extra via props*/}
      <div className={`modal ${props.name}`}>
        <button className={`modal__button-close ${props.buttonclose} ${props.buttonclassetwo}`}><img src={buttonClose} alt='Icone em formato de x, simbolizando fechar' /></button>
        <div className='modal__container'>
          <h2 className='modal__title'>{props.title}</h2>
          {props.children}
        </div>
      </div>
    </>
  )
}

export default PopupWithForm;