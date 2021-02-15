import api from '../utils/api.js';
import Card from './Card.js';
import App from './App.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import React, { useEffect, useState } from 'react';

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);

    const [cards, setCards] = useState([]);

    useEffect(() => {
        const initialCards = api.getInitialCards();
        initialCards.then((cardsInfo) => {
            setCards(Array.from(cardsInfo).map((card) => {
                return ( <Card card={card} key={card._id} onCardClick={props.onCardClick}/> );
            }));
        })
    }, []);
  
  return (
    <main className="content">
        <section className="profile">
          <div className="profile__info">
            <span className = "profile__image-wrapper">
              <button type="button" className="profile__edit-avatar-button" onClick={props.onEditAvatar}></button>
              <img className="profile__avatar" src={`${currentUser.avatar}`} alt="Фотография профиля"></img>
            </span>
            <div className="profile__data">
              <div className="profile__text">
                <h1 className="profile__name">{currentUser.name}</h1>
                <p className="profile__description">{currentUser.about}</p>
              </div>
              <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
            </div>
          </div>
          <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
        </section>

        <section className="photo-grid">
            {cards}
        </section>
    </main>  
  );
}
  
export default Main;