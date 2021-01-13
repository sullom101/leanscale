import React, { useState } from "react";
import styles from "./subscribe.module.scss";
import Button from "../Button/Button";
import InputLabel from "../InputLabel/InputLabel";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <h4 className={styles.headerTitle}>Get your best games deals first</h4>
        <InputLabel
          searchWrapper={styles.inputWrapper}
          labelStyle={styles.label}
          inputStyle={styles.inputStyle}
          placeholder="Enter your email"
          type="email"
          iconStyle={styles.icon}
          value={email}
          onChange={(val) => setEmail(val.target.value)}
        />
        <Button className={styles.buttonStyle}>Subscribe</Button>
      </div>
    </section>
  );
};

export default Subscribe;
