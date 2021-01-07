import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.module.scss';

const Header = (props) => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.navigationWrapper}>
        <div className={styles.logoWrapper}>
          {/* <h1>
                     sullom
                 </h1> */}
        </div>
        <div className={styles.search}>
          <label className={styles.label}>
            <input
              type="text"
              className={styles.inputItem}
              placeholder="Search games, gears, accessories.."
            />
          </label>
          <span className={styles.searchIcon}></span>
        </div>
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
