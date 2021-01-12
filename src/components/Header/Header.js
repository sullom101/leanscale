import React from "react";
import PropTypes from "prop-types";
import styles from "./header.module.scss";
import Search from "../Search/Search";

const Header = (props) => {
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
        />
        <div className={styles.iconListWrapper}>
          <div className={styles.iconListItems}>
            <div className={styles.iconListitem}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon} />
              </div>
            </div>
            <div className={styles.iconListitem}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon2} />
              </div>
            </div>
          </div>
          <span className={styles.line} />
          <div className={styles.iconListItems}>
            <div className={styles.iconListitem}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon3} />
              </div>
            </div>
            <div className={styles.iconListitem}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon2} />
              </div>
            </div>
            <div className={styles.iconListitem}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon4} />
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
