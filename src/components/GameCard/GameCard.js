import React from "react";
import PropTypes from "prop-types";
import styles from "./game-card.module.scss";
import Button from "../Button/Button";

const GameCard = ({ title, price, prePrice, currency, buttonText, discount, imgLink }) => {
  return (
    <div className={styles.gameCard}>
      <div className={styles.imageWrapper}>
        <img src={imgLink} className={styles.image} alt="" />
        <Button className={styles.LikeButton} />
      </div>
      <div className={styles.gameInfo}>
        <legend className={styles.gametitle}>{title}</legend>

        <div className={styles.priceLabel}>
          <div className={styles.discountedPrice}>
            <small className={styles.discountedPriceLabel}>
              {currency}
              {price}
            </small>
          </div>
          <div className={styles.priceTag}>
            <strike className={styles.priceLabel}>
              <small>
                {currency}
                {prePrice}
              </small>
            </strike>
            {discount > 0 ? <small className={styles.discount}>{discount}% OFF</small> : ""}
          </div>
        </div>
      </div>
      <Button className={styles.cardButton}>{buttonText}</Button>
    </div>
  );
};

GameCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  currency: PropTypes.string,
  prePrice: PropTypes.number,
  discount: PropTypes.number,
  buttonText: PropTypes.string,
  imgLink: PropTypes.string
};
GameCard.defaultProps = {
  title: "Vampire: The Masquerade - Bloodlines 2 Steam Key",
  price: 4.36,
  currency: "€",
  prePrice: 4.36,
  discount: 15,
  buttonText: "Pre Order",
  imgLink: "/images/game-card.jpeg"
};

export default GameCard;
