import React from "react";
import PropTypes from "prop-types";
import styles from "./games-hub.module.scss";
import Button from "../Button/Button";
import ChannelList from "../ChannelList/ChannelList";
import FollowList from "../FollowList/FollowList";
import PostList from "../PostList/PostList";
const GamesHub = (props) => {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>Games Hub</h2>
          <p className={styles.subTitle}>
            The best offers, new games, AAA titles and high-quality video games..
          </p>
          <Button className={styles.buttonStyle}>Discover All</Button>
        </div>
        <div className={styles.hubWrapper}>
          <PostList />
          <ChannelList />
          <FollowList />
        </div>
      </div>
    </section>
  );
};

GamesHub.propTypes = {};

export default GamesHub;
