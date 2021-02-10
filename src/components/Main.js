import api from '../utils/Api.js';
import Card from './Card.js';
import React, { useEffect, useState } from 'react';

function Main(props) {
    let [userName, setUserName] = useState('');
    let [userDescription, setUserDescription] = useState('');
    let [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);


    useEffect(() => {
        const data = api.getProfileData();
        data.then((userData) => {
            setUserName(userData.name);
            setUserDescription(userData.about);
            setUserAvatar(userData.avatar);
        })
        .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        const initialCards = api.getInitialCards();
        initialCards.then((cardsInfo) => {
            setCards(Array.from(cardsInfo).map((card) => {
                return ( <Card card={card} key={card._id} /> );
            }));
        })
    })
  
  return (
    <main className="content">
        <section className="profile">
          <div className="profile__info">
            <span className = "profile__image-wrapper">
              <button type="button" className="profile__edit-avatar-button" onClick={props.onEditAvatar}></button>
              <img className="profile__avatar" src={`${userAvatar}`} alt="Фотография профиля"></img>
            </span>
            <div className="profile__data">
              <div className="profile__text">
                <h1 className="profile__name">{userName}</h1>
                <p className="profile__description">{userDescription}</p>
              </div>
              <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
            </div>
          </div>
          <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
        </section>

        <section className="photo-grid">
            {cards}
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