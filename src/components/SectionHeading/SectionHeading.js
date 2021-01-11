import React from "react";
import PropTypes from "prop-types";
import styles from "./section-heading.module.scss";
import Button from "../Button/Button";
const SectionHeading = ({
  buttonTitle,
  title,
  subTitle,
  titleStyle,
  subTitleStyle,
  buttonStyle,
  wrapperStyle
}) => {
  return (
    <div className={`${styles.titleWrapper} ${wrapperStyle}`}>
      <h2 className={`${styles.title} ${titleStyle}`}>{title}</h2>
      <p className={`${styles.subTitle} ${subTitleStyle}`}>{subTitle}</p>
      <Button className={`${styles.buttonStyle} ${buttonStyle}`}>{buttonTitle}</Button>
    </div>
  );
};

SectionHeading.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  buttonTitle: PropTypes.string,
  titleStyle: PropTypes.string,
  subTitleStyle: PropTypes.string,
  buttonStyle: PropTypes.string,
  wrapperStyle: PropTypes.string
};

SectionHeading.defaultProps = {
  title: "Games Hub",
  subTitle: "The best offers, new games, AAA titles and high-quality video games..",
  buttonTitle: "Discover All",
  titleStyle: "",
  subTitleStyle: "",
  buttonStyle: "",
  wrapperStyle: ""
};

export default SectionHeading;
