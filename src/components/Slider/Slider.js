import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./slider.module.scss";
import Button from "../Button/Button";

const Slider = ({ slider }) => {
  const [current, setCurrent] = useState(0);
  const length = slider.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slider) || slider.length <= 0) {
    return null;
  }

  return (
    <section className={styles.sectionWrapper}>
      <Button className={styles.goLeft} onClick={prevSlide}>
        PREV
      </Button>
      <Button className={styles.goRight} onClick={nextSlide}>
        NEXT
      </Button>
      {slider.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div className={index === current ? styles.slideLeft : styles.slide}>
              {index === current && <img src={item.image} alt="" className={styles.imageLeft} />}
            </div>
            <div className={index === current ? styles.slideActive : styles.slide}>
              {index === current && <img src={item.image} alt="" className={styles.imageActive} />}
            </div>
            <div className={index === current ? styles.slideRight : styles.slide}>
              {index === current && <img src={item.image} alt="" className={styles.imageRight} />}
            </div>
          </React.Fragment>
        );
      })}
      <div className={styles.dotWrapper}>
        {slider.map((dot, index) => {
          return (
            <Button
              key={`dot-${index}`}
              className={current === index ? styles.dotActive : styles.dot}
              onClick={() => setCurrent(index)}></Button>
          );
        })}
      </div>
    </section>
  );
};

Slider.propTypes = {
  slider: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string
    })
  )
};

Slider.defaultProps = {
  slider: []
};

export default Slider;
