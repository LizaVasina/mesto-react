import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import './App.css';
import React, {useState} from 'react';



function App() {
  const [isEditProfileOpen, setEditProfileOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isSubmitPopupOpen, setSubmitPopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleCardClick(cardData) {
    setImagePopupOpen(true);
    setSelectedCard(cardData);
  }

  function CloseAllPopups() {
    setEditProfileOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSubmitPopupOpen(false);
    setImagePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="App">
      <div className="page">
        <div className="page_content">

    <Header></Header>
    
    <Main 
      onEditProfile={() => {
        setEditProfileOpen(true);
      }}
      onAddPlace={() => {
        setAddPlacePopupOpen(true);
      }}
      onEditAvatar={() => {
        setEditAvatarPopupOpen(true);
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
      children= {<div><input id="name" type="text" minLength="2" maxLength="40" autoComplete="off" placeholder="Имя" name="name" className="popup__text popup__text_type_name" required></input>
      <span id="name-error" className="popup__text-error"></span>
      <input id="description" type="text" minLength="2" maxLength="200" autoComplete="off" placeholder="О себе" name="description" className="popup__text popup__text_type_description" required></input>
      <span id="description-error" className="popup__text-error"></span></div>}
      isOpen={isEditProfileOpen}
      onClose={CloseAllPopups}
    />

    <PopupWithForm 
      name='photos'
      title='Новое место'
      formName='photos'
      buttonName='create'
      buttonTitle='Создать'
      children= {<div><input id="pic-name" type="text" minLength="2" maxLength="30" placeholder="Имя" name="name" className="popup__text popup__text_type_pic-name" required></input>
      <span id="pic-name-error" className="popup__text-error"></span>
      <input id="link" type="url" placeholder="Ссылка на картинку" name="link" className="popup__text popup__text_type_link" required></input>
      <span id="link-error" className="popup__text-error"></span></div>}
      isOpen={isAddPlacePopupOpen}
      onClose={CloseAllPopups}
    />

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
      children= {<div><input id="avatar" type="url" placeholder="Ссылка на аватар" name="link" className="popup__text popup__text_type_link" required></input>
      <span id="avatar-error" className="popup__text-error"></span></div>}
      isOpen={isEditAvatarPopupOpen}
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
  );
}

export default App;
