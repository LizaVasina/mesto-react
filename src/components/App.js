import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import './App.css';
import React, {useState, useEffect} from 'react';



function App() {
  //контекст пользователя
  const [currentUser, setCurrentUser] = useState({});

  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isSubmitPopupOpen, setIsSubmitPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    api.getProfileData()
      .then((userDara) => {
        setCurrentUser(userDara);
      })
      .catch((err) => console.log(err))
  }, []);

  function handleCardClick(cardData) {
    setIsImagePopupOpen(true);
    setSelectedCard(cardData);
  }

  function CloseAllPopups() {
    setIsEditProfileOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsSubmitPopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard(null);
  }

  return (
  <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
          <div className="page_content">

      <Header></Header>
      
      <Main 
        onEditProfile={() => {
          setIsEditProfileOpen(true);
        }}
        onAddPlace={() => {
          setIsAddPlacePopupOpen(true);
        }}
        onEditAvatar={() => {
          setIsEditAvatarPopupOpen(true);
        }}
        onCardClick={handleCardClick}
      />

      <Footer></Footer>

      <PopupWithForm 
        name='info'
        title='Редактировать профиль'
        formName='info'
        buttonName='save'
        buttonTitle='Сохранить'
        isOpen={isEditProfileOpen}
        onClose={CloseAllPopups}>
          <div><input id="name" type="text" minLength="2" maxLength="40" autoComplete="off" placeholder="Имя" name="name" className="popup__text popup__text_type_name" required></input>
          <span id="name-error" className="popup__text-error"></span>
          <input id="description" type="text" minLength="2" maxLength="200" autoComplete="off" placeholder="О себе" name="description" className="popup__text popup__text_type_description" required></input>
          <span id="description-error" className="popup__text-error"></span></div>
        </PopupWithForm>

      <PopupWithForm 
        name='photos'
        title='Новое место'
        formName='photos'
        buttonName='create'
        buttonTitle='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose={CloseAllPopups}>
          <div><input id="pic-name" type="text" minLength="2" maxLength="30" placeholder="Имя" name="name" className="popup__text popup__text_type_pic-name" required></input>
          <span id="pic-name-error" className="popup__text-error"></span>
          <input id="link" type="url" placeholder="Ссылка на картинку" name="link" className="popup__text popup__text_type_link" required></input>
          <span id="link-error" className="popup__text-error"></span></div>
        </PopupWithForm>
      

      <PopupWithForm 
        name='submit'
        title='Вы уверены?'
        buttonName='submit-action'
        buttonTitle='Да'
        isOpen={isSubmitPopupOpen}
        onClose={CloseAllPopups}
      />

      <PopupWithForm 
        name='edit-avatar'
        title='Обновить аватар'
        formName='avatar'
        buttonName='update'
        buttonTitle='Сохранить'
        isOpen={isEditAvatarPopupOpen}
        onClose={CloseAllPopups}>
          <div><input id="avatar" type="url" placeholder="Ссылка на аватар" name="link" className="popup__text popup__text_type_link" required></input>
          <span id="avatar-error" className="popup__text-error"></span></div>
        </PopupWithForm>

      <ImagePopup 
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={CloseAllPopups}
      />
      </div>
      </div>
      </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
