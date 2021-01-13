import React from "react";
import PropTypes from "prop-types";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./upcoming-games.module.scss";
import Button from "../Button/Button";
import GameCard from "../GameCard/GameCard";

const UpcomingGames = ({ data }) => {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <SectionHeading
          title="Upcoming Games"
          subTitle="Pre-order an upcoming game to start playing on Day 1."
          buttonTitle="Discover All"
          titleStyle={styles.titleStyle}
          subTitleStyle={styles.subTitleStyle}
          buttonStyle={styles.headingButton}
          wrapperStyle={styles.headingWrapper}
        />
        <div className={styles.cardsWrapper}>
          {data.map((item, index) => (
            <GameCard
              title={item.title}
              price={item.price}
              currency={item.currency}
              discount={item.discount}
              prePrice={item.prePrice}
              imgLink={item.imgLink}
              key={`product-${index}`}
            />
          ))}
        </div>
        <div className={styles.buttonWrapper}>
          <Button className={styles.button}>LOAD MORE</Button>
        </div>
      </div>
    </section>
  );
};

UpcomingGames.propTypes = {
  data: PropTypes.array
};

UpcomingGames.defaultProps = {
  data: []
};

export default UpcomingGames;
