//variaveis para uso na Api
const authorizationCode = "85c06b76-d1bb-40cc-b9fa-fda6b61002da";
const urlApi = "https://around.nomoreparties.co/v1/web_ptbr_04";
const myUserId = "436e74c115dfe006750ac205";

class Api {
  constructor() {
    this.authorization = authorizationCode;
    this.baseUrl = urlApi;
  }

  //metodo para pegar informaçoes do perfil
  getProfile() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: {
        authorization: this.authorization
      }
    })
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .catch(error => {
        console.error("Erro ao carregar as informações do perfil:", error);
        throw error;
      });
  }

  //pegar os cards iniciais
  fetchInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: {
        authorization: this.authorization
      }
    })
      .then(res => res.json())
      .catch((error) => {
        console.error("Erro ao buscar os cards iniciais:", error);
        return [];
      });
  }
}

const apiInstance = new Api();
export default apiInstance;