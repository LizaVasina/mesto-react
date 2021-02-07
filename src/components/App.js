import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="page_content">

    <Header></Header>
    
    <Main></Main>

    <Footer></Footer>

    <div className="popup popup_type_info">
      <div className="popup__container">
        <button type="button" className="popup__close-button popup__close-button_place_info"></button>
        <h2 className="popup__title">Редактировать профиль</h2>
        <form className="popup__form popup__form_type_info" name="Popup-form-info" method="post" novalidate>
          <input id="name" type="text" minlength="2" maxlength="40" autocomplete="off" placeholder="Имя" name="name" className="popup__text popup__text_type_name" required></input>
          <span id="name-error" className="popup__text-error"></span>
          <input id="description" type="text" minlength="2" maxlength="200" autocomplete="off" placeholder="О себе" name="description" className="popup__text popup__text_type_description" required></input>
          <span id="description-error" className="popup__text-error"></span>
          <button type="submit" className="popup__button popup__button_type_save">Сохранить</button>
        </form>
      </div>
    </div>

    <div className="popup popup_type_photos">
      <div className="popup__container">
        <button type="button" className="popup__close-button popup__close-button_place_photos"></button>
        <h2 className="popup__title">Новое место</h2>
        <form className="popup__form popup__form_type_photos" name="Popup-form-photos" method="post" novalidate>
          <input id="pic-name" type="text" minlength="2" maxlength="30" placeholder="Имя" name="name" className="popup__text popup__text_type_pic-name" required></input>
          <span id="pic-name-error" className="popup__text-error"></span>
          <input id="link" type="url" placeholder="Ссылка на картинку" name="link" className="popup__text popup__text_type_link" required></input>
          <span id="link-error" className="popup__text-error"></span>
          <button type="submit" className="popup__button popup__button_type_create">Создать</button>
        </form>
      </div>
    </div>

    <div className="popup popup_type_submit">
      <div className="popup__container">
        <button type="button" className="popup__close-button popup__close-button_place_submit"></button>
        <h2 className="popup__title">Вы уверены?</h2>
        <button type="button" className="popup__button popup__button_type_submit-action">Да</button>
      </div>
    </div>

    <div className="popup popup_type_edit-avatar">
      <div className="popup__container">
        <button type="button" className="popup__close-button popup__close-button_place_submit"></button>
        <h2 className="popup__title">Вы уверены?</h2>
        <form className="popup__form popup__form_type_edit-avatar" name="Popup-form-avatar" method="post" novalidate>
          <input id="avatar" type="url" placeholder="Ссылка на аватар" name="link" className="popup__text popup__text_type_link" required></input>
          <span id="avatar-error" className="popup__text-error"></span>
          <button type="submit" className="popup__button popup__button_type_update">Сохранить</button>
        </form>
      </div>
    </div>

    <div className="popup pic-popup">
      <div className="popup__container popup__container_place_picture">
        <button type="button" className="popup__close-button popup__close-button_place_picture"></button>
          <img className="pic-popup__image" src="" alt="Открытое фото из галереи"></img>
          <p className="pic-popup__caption"></p>
      </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;
