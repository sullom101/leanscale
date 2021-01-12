import React from "react";
import PropTypes from "prop-types";
import styles from "./subscribe.module.scss";
import Button from "../Button/Button";

const Subscribe = (props) => {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <h4 className={styles.headerTitle}>Get your best games deals first</h4>
        <div className={styles.inputWrapper}>
          <label className={styles.label}>
            <span className={styles.icon} />
            <input className={styles.inputStyle} placeholder="Enter your email" type="email" />
          </label>
        </div>
        <Button className={styles.buttonStyle}>Subscribe</Button>
      </div>
    </section>
  );
};

Subscribe.propTypes = {};

export default Subscribe;
