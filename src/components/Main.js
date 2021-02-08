import React from 'react';

function Main(props) {
  return (
    <main className="content">
        <section className="profile">
          <div className="profile__info">
            <span className = "profile__image-wrapper">
              <button type="button" className="profile__edit-avatar-button" onClick={props.onEditAvatar}></button>
              <img className="profile__avatar" src="" alt="Фотография профиля"></img>
            </span>
            <div className="profile__data">
              <div className="profile__text">
                <h1 className="profile__name">Жак-Ив Кусто</h1>
                <p className="profile__description">Исследователь океана</p>
              </div>
              <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
            </div>
          </div>
          <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
        </section>

        <section className="photo-grid">
          <template id="card-template">
            <article className="card">
              <button type="button" className="card__delete-button"></button>
              <button type="button" className="card__popup-button">
                <img className="card__picture" src="" alt=""></img>
              </button>
              <div className="card__description">
                <h2 className="card__title"></h2>
                <div className="card__like-section">
                  <button type="button" className="card__like"></button>
                  <p className="card__like-number"></p>
                </div>
              </div>
            </article>
          </template>
        </section>
    </main>  
  );
}
  
export default Main;