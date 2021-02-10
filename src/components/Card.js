import React from 'react';

function Card(props) {
    return (
        <article className="card" >
            <button type="button" className="card__delete-button"></button>
            <button type="button" className="card__popup-button" onClick={() => props.onCardClick(props.card)}>
                <img className="card__picture" src={`${props.card.link}`} alt={props.card.name}></img>
            </button>
            <div className="card__description">
                <h2 className="card__title">{props.card.name}</h2>
                <div className="card__like-section">
                <button type="button" className="card__like"></button>
                <p className="card__like-number">{props.card.likes.length}</p>
                </div>
            </div>
            </article>
    )
}

export default Card;