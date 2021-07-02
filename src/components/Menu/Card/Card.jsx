import React from "react";
import "./Card.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import cartImage from "../../../assets/images/icons/trash.svg";

const Card = ({ card, addToCart, deleteFromCart, storageitems }) => {
  const added = storageitems.some((item) => item === card.id);

  return (
    <div className="card">
      <div className="card__image">
        <LazyLoadImage src={card.image} alt="card-image" />
      </div>
      <div className="card__content">
        <h3 className="card__title">{card.name}</h3>
        <div className="card__text">
          <p>{card.description}</p>
        </div>
        <div className="card__data">
          <div className="card__weight">{card.weight} гр.</div>
          <div className="card__price">
            <span>{card.price}</span> BYN
          </div>
          <ul className="card__pfc-list">
            <li className="card__pfc-item card__pfc-item--blue">
              Б: {card.pfc.proteins}
            </li>
            <li className="card__pfc-item card__pfc-item--yellow">
              Ж: {card.pfc.fats}
            </li>
            <li className="card__pfc-item card__pfc-item--green">
              У: {card.pfc.carbonates}
            </li>
          </ul>
        </div>
      </div>
      <div className="card__button-group">
        <button
          onClick={() => addToCart(card)}
          type="button"
          className="card__button"
          disabled={added}
        >
          {added ? "Добавлено" : "В Корзину"}
        </button>
        <img
          className={
            added
              ? "card__delete-item card__delete-item--visible"
              : "card__delete-item"
          }
          src={cartImage}
          alt="delete"
          onClick={() => deleteFromCart(card.id)}
        />
      </div>
    </div>
  );
};

export default Card;
