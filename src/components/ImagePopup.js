import React from 'react';

function ImagePopup() {
    return (
        <div className="popup pic-popup">
            <div className="popup__container popup__container_place_picture">
            <button type="button" className="popup__close-button popup__close-button_place_picture"></button>
                <img className="pic-popup__image" src="" alt="Открытое фото из галереи"></img>
                <p className="pic-popup__caption"></p>
            </div>
        </div>
    )
}

export default ImagePopup;