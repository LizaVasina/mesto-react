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
        setCards(cardsInfo);
      })
    }, []);


    function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        const newCards = cards.map(c => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
      .catch((err) => console.log(err));
    }

    function handleCardDelete(deletedCard) {
      api.deleteCard(deletedCard._id)
        .then(() => {
          const newCards = cards.filter(currentCard => currentCard != deletedCard);
          setCards(newCards);
        })
        .catch((err) => console.log(err));
    }

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
          {Array.from(cards).map((card) => {
            return <Card card={card} 
            key={card._id} 
            onCardClick={props.onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}/>
          })}
        </section>
    </main>  
  );
}
  
export default Main;