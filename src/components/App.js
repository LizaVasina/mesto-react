import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Card from './Card.js';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import './App.css';
import React, {useState, useEffect} from 'react';
import { specialChars } from '@testing-library/user-event';



function App() {
  //контекст пользователя
  const [currentUser, setCurrentUser] = useState({});

  const [isEditProfilePopupOpen, setIsEditProfileOpen] = useState(false);
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

  function handleUpdateUser(userInfo) {
    api.updateProfileData(userInfo.name, userInfo.about)
      .then((userInfo) => {
        setCurrentUser(userInfo);
        CloseAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateAvatar(avatarInfo) {
    api.updateProfileAvatar(avatarInfo.avatar)
      .then((avatarInfo) => {
        setCurrentUser(avatarInfo);
        CloseAllPopups();
      })
      .catch((err) => console.log(err));
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

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={CloseAllPopups}
        onUpdateUser={handleUpdateUser}>
      </EditProfilePopup>

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={CloseAllPopups}
        onUpdateAvatar={handleUpdateAvatar}>
      </EditAvatarPopup>

      <PopupWithForm 
        name='photos'
        title='Новое место'
        formName='photos'
        buttonName='create'
        buttonTitle='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose={CloseAllPopups}>
          <input id="pic-name" type="text" minLength="2" maxLength="30" placeholder="Имя" name="name" className="popup__text popup__text_type_pic-name" required></input>
          <span id="pic-name-error" className="popup__text-error"></span>
          <input id="link" type="url" placeholder="Ссылка на картинку" name="link" className="popup__text popup__text_type_link" required></input>
          <span id="link-error" className="popup__text-error"></span>
        </PopupWithForm>
      

      <PopupWithForm 
        name='submit'
        title='Вы уверены?'
        buttonName='submit-action'
        buttonTitle='Да'
        isOpen={isSubmitPopupOpen}
        onClose={CloseAllPopups}
      />

      

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
