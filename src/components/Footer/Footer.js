import React from "react";
import PropTypes from "prop-types";
import styles from "./footer.module.scss";
import FotterMenu from "../FooterMenu/FooterMenu";

const Footer = ({ menu }) => {
  const { data } = menu;
  return (
    <footer className={styles.footerWrapper}>
      <section className={styles.sectionWrapper}>
        <div className={styles.container}>
          {data.map((el, index) => {
            return (
              <FotterMenu
                menuItemStyle={styles.menuItem}
                menuListStyle={styles.menuList}
                title={el.title}
                titleStyle={styles.menuTitle}
                menuStyle={styles.footerMenu}
                menu={el.menu}
                key={`${el.title}-index-${index}`}
              />
            );
          })}

          <div className={styles.appCtaWrapper}>
            <img src="/icons/icn-app.svg" className={styles.image} alt="" />
            <div className={styles.ctaWrapper}>
              <legend className={styles.text}>Install the app</legend>
              <small className={styles.subText}>Get great deals on games wherever you go!</small>
            </div>
          </div>
          <div className={styles.downloadWrapper}>
            <div className={styles.imageGoogle} />
            <small className={styles.downloadText}>Get it on Google Play©</small>
          </div>
          <div className={styles.downloadWrapper}>
            <div className={styles.imageApple} />
            <small className={styles.downloadText}>Download on the App Store®</small>
          </div>
        </div>
      </section>
      <section className={styles.copySectionWrapper}>
        <div className={styles.copyContainer}>
          <div className={styles.copyText}>
            Copyright © 2020. All Rights Reserved. \n Use of this Web site constitutes acceptance of
            the Terms and Conditions and Privacy policy. All copyrights, trade marks, service marks
            belong to the corresponding owners.
          </div>
          <div className={styles.paymentWrapper}>
            <div className={styles.visa} />
            <div className={styles.master} />
            <div className={styles.paypal} />
          </div>
        </div>
      </section>
    </footer>
  );
};

Footer.propTypes = {
  menu: PropTypes.object
};

export default Footer;
