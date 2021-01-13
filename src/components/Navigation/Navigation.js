import React from "react";
import styles from "./navigation.module.scss";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className={styles.navigationWrapper}>
      <nav className={styles.container}>
        <div className={styles.tabActive}>
          <Link href="/">
            <a className={styles.tabItem} href="/">
              <span className={styles.homeIcon} />
              <li className={styles.navItem}>Home</li>
            </a>
          </Link>
        </div>

        <div className={styles.tab}>
          <Link href="/">
            <a className={styles.tabItem} href="/">
              <span className={styles.searchIcon} />
              <li className={styles.navItem}>Social</li>
            </a>
          </Link>
        </div>
        <div className={styles.tab}>
          <Link href="/">
            <a className={styles.tabItem} href="/">
              <span className={styles.marketIcon} />
              <li className={styles.navItem}>Market</li>
            </a>
          </Link>
        </div>
        <div className={styles.tab}>
          <Link href="/">
            <a className={styles.tabItem} href="/">
              <span className={styles.tournmentIcon} />
              <li className={styles.navItem}>Tournements</li>
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

Navigation.propTypes = {};

export default Navigation;
