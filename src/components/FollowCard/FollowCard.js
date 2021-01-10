import React from "react";
import PropTypes from "prop-types";
import styles from "./follow-card.module.scss";
import Button from "../Button/Button";

const ChannelItem = ({ slug, subscribers, imageLink, channel, followers }) => {
  if (channel) {
    return (
      <div className={styles.cahnnelWrapper}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={imageLink} alt="" />
        </div>
        <div className={styles.channelInfoWrapper}>
          <p className={styles.channelname}> {slug}</p>
          <span className={styles.channelUsers}> {subscribers} Users</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.followWrapper}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={imageLink} alt="" />
        </div>
        <div className={styles.channelInfoWrapper}>
          <p className={styles.channelname}> {slug}</p>
          <span className={styles.channelUsers}> {followers.toLocaleString()} Followers</span>
        </div>
        <div className={styles.addFriendWrapper}>
          <Button link>
            <div className={styles.addFriendsvg} />
          </Button>
        </div>
      </div>
    );
  }
};

ChannelItem.propTypes = {
  slug: PropTypes.string,
  subscribers: PropTypes.string,
  imageLink: PropTypes.string,
  channel: PropTypes.bool,
  followers: PropTypes.number
};
ChannelItem.defaultProps = {
  slug: "#social Hub",
  subscribers: "195K",
  imageLink: "/images/game-icn-fortnite-copy-2@3x.png",
  channel: false,
  followers: 325860
};

export default ChannelItem;
