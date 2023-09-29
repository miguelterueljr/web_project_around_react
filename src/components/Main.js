import { useState, useEffect } from 'react';

import editPhotoProfile from '../images/edit-photo-profile.png';
import jacquesCosteau from '../images/jacques-costeau.jpg';
import buttonEdit from '../images/button-edit.png';
import addButton from '../images/add-button.png';

import Header from './Header';
import Footer from './Footer';

import apiInstance from '../utils/api';


function Main(props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  useEffect(() => {
    // Função para buscar os dados do usuário na API
    const fetchUserData = () => {
      apiInstance.getProfile()
        .then((data) => {
          // Extrair os dados relevantes do usuário
          //to fazendo um object desconstructing para armazenar em data e so utilziar o nome, sem ser data.name ou data.about ou data.avatar
          const { name, about, avatar } = data;
          console.log(name)
          console.log(about)
          console.log(avatar)

          // Definir os dados recebidos nas variáveis de estado
          setUserName(name || 'JacquesCosteau');
          setUserDescription(about || 'Explorador');
          setUserAvatar(avatar || jacquesCosteau);
        })
        .catch((error) => {
          console.error('Erro ao buscar os dados do perfil:', error);
        });
    };

    // Chama a função para buscar os dados do usuário quando o componente é montado
    fetchUserData();
  });

  console.log('userAvatar:', userAvatar);
  console.log('descricao', userDescription)

  return (
    <div>
      <main className="page">
      
        <Header />

        <section className="profile">
          <div className="profile__container">
            <div className="profile__image-overlay" onClick={props.onEditAvatarClick}>
              <img src={userAvatar} alt="Foto JAcques Costeau" className="profile__image" />
              <img src={editPhotoProfile} alt="Simbolo de editar a foto do profile" className="profile__edit-picture" />
            </div>
            <div className="profile__info">
              <div className="profile__title">
                <h1 className="profile__name">{userName}</h1>
                <button className="button button-edit" onClick={props.onEditProfileClick}><img src={buttonEdit} alt="Simbolo de um botão de editar" /></button>
              </div>
              <span className="profile__about">{userDescription}</span>
            </div>
          </div>
          <button className="button button-add" onClick={props.onAddPlaceClick}>
            <img src={addButton} alt="Botão com o símbolo mais, para adicionar um card" />
          </button>
        </section>

        <section className="elements">
          {/* Conteúdo da seção de elementos */}
        </section>

        {/* Template para o card */}
        <template id="element" className="card-template">
          <article className="element">
            <img className="element__image" alt="template" />
            <button className="element__delete"><img src="<%=require('./images/delete-icon.png')%>" alt="botão em formato de delete" /></button>
            <div className="element__text">
              <h3 className="element__title"></h3>
              <div className="element__text_liked">
                <button className="element__button"><img src="<%=require('./images/like-button.svg')%>" alt="Símbolo de curtir no formato de coração." className="element__button_image" /></button>
                <p className="element__number">0</p>
              </div>
            </div>
          </article>
        </template>

        <Footer />
      </main>
    </div>
  )
}

export default Main;
