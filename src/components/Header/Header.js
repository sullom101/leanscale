import React, { useState } from "react";
import styles from "./header.module.scss";
import Search from "../InputLabel/InputLabel";
import Button from "../Button/Button";

const Header = (props) => {
  const [search, setSearch] = useState("");
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.navigationWrapper}>
        <div className={styles.logoWrapper}></div>
        <Search
          searchWrapper={styles.search}
          labelStyle={styles.label}
          inputStyle={styles.inputItem}
          placeholder="Search games, gears, accessories.."
          iconStyle={styles.searchIcon}
          value={search}
          onChange={(val) => setSearch(val.target.value)}
        />
        <div className={styles.iconListWrapper}>
          <div className={styles.iconListItems}>
            <div className={styles.iconListitem}>
              <div className={styles.iconWrapper}>
                <Button link className={styles.icon} />
              </div>
            </div>
            <div className={styles.iconListitem}>
              <div className={styles.iconWrapper}>
                <Button link className={styles.icon2} />
              </div>
            </div>
          </div>
          <span className={styles.line} />
          <div className={styles.iconListItems}>
            <div className={styles.iconListitem}>
              <div className={styles.iconWrapper}>
                <Button link className={styles.icon3} />
              </div>
            </div>
            <div className={styles.iconListitem}>
              <div className={styles.iconWrapper}>
                <Button link className={styles.icon5} />
              </div>
            </div>
            <div className={styles.iconListitem}>
              <div className={styles.iconWrapper}>
                <Button link className={styles.icon4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
