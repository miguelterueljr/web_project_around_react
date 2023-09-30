import { useState, useEffect } from 'react';

import editPhotoProfile from '../images/edit-photo-profile.png';
import jacquesCosteau from '../images/jacques-costeau.jpg';
import buttonEdit from '../images/button-edit.png';
import addButton from '../images/add-button.png';

import Header from './Header';
import Footer from './Footer';

import apiInstance from '../utils/api';
import Card from './Card';


function Main(props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([])

  useEffect(() => {
    // Função para buscar os dados do usuário na API
    const fetchUserData = () => {
      apiInstance.getProfile()
        .then((data) => {
          // Extrair os dados relevantes do usuário
          //to fazendo um object desconstructing para armazenar em data e so utilziar o nome, sem ser data.name ou data.about ou data.avatar
          const { name, about, avatar } = data;
          
          // Definir os dados recebidos nas variáveis de estado
          setUserName(name || 'JacquesCosteau');
          setUserDescription(about || 'Explorador');
          setUserAvatar(avatar || jacquesCosteau);
        })
        .catch((error) => {
          console.error('Erro ao buscar os dados do perfil:', error);
        });
    };

    // Função para pegar os cards iniciais do servidor
    const fetchInitialCards = () => {
      apiInstance.fetchInitialCards()
        .then((res) => {
          // Adicione os cards buscados ao estado usando setCards
          setCards(res);
        })
        .catch((error) => {
          console.error('Erro ao buscar os cards iniciais:', error);
        });
    };
      
    

    // Chama a função para buscar os dados do usuário quando o componente é montado
    fetchUserData();
    fetchInitialCards();

  }, []);

  //aqui estou colocando minha resposta no console somente quando o array nao esta mais vazio
  useEffect(() => {
    if (cards.length > 0) {
      console.log(cards);
    }
  }, [cards]);


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
          {cards.map((cardData, index) => (
            <Card
              key={index} // chave para cada elemento da lista
              title={cardData.name} // vem do objeto o name
              image={cardData.link} // vem do objeto o link
              likes={cardData.likes} // numero de likes
            />
  ))}
</section>


        <Footer />
      </main>
    </div>
  )
}

export default Main;
