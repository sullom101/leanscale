import React from "react";
import PropTypes from "prop-types";
import styles from "./games-hub.module.scss";
import Button from "../Button/Button";
import Comment from "../Comment/Comment";
import FollowCard from "../FollowCard/FollowCard";
import SectionHeading from "../SectionHeading/SectionHeading";

const GamesHub = (props) => {
  const somdata = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const call = [0, 1, 2];
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <SectionHeading
          title="Games Hub"
          subTitle="The best offers, new games, AAA titles and high-quality video games.."
          buttonTitle="Discover All"
          titleStyle={styles.titleStyle}
          subTitleStyle={styles.subTitleStyle}
          buttonStyle={styles.headingButton}
        />
        <div className={styles.hubWrapper}>
          <div className={styles.postWrapper}>
            <h3 className={styles.title}>Latest posts</h3>
            {call.map((el, index) => (
              <Comment className={styles.commentWrapper} key={`comment-${index}`} />
            ))}
          </div>
          <div className={`${styles.wrapper} ${styles.channelWrapper}`}>
            <h3 className={styles.title}>Channels</h3>
            {somdata.map((el, index) => (
              <Button link key={`channel-${index}`}>
                <FollowCard channel />
              </Button>
            ))}
            <Button className={styles.button}> Find More</Button>
          </div>
          <div className={styles.wrapper}>
            <h3 className={styles.title}>Who to follow?</h3>
            {somdata.map((el, index) => (
              <FollowCard key={`follow-${index}`} />
            ))}
            <Button className={styles.button}>Discover All</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

GamesHub.propTypes = {};

export default GamesHub;
