import React from "react";
import PropTypes from "prop-types";
import styles from "./games-hub.module.scss";
import Button from "../Button/Button";
import Comment from "../Comment/Comment";
import FollowCard from "../FollowCard/FollowCard";
import SectionHeading from "../SectionHeading/SectionHeading";

const GamesHub = ({ users, channel, comments }) => {
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
          wrapperStyle={styles.headingWrapper}
        />
        <div className={styles.hubWrapper}>
          <div className={styles.postWrapper}>
            <h3 className={styles.title}>Latest posts</h3>
            {comments.map((el, index) => (
              <Comment
                className={styles.commentWrapper}
                key={`comment-${index}`}
                name={el.name}
                userImage={el.userImage}
                username={el.username}
                commentText={el.commentText}
                followers={el.followers}
                commentTime={el.commentTime}
                likes={el.likes}
                pro={el.pro}
                comments={el.comments}
              />
            ))}
          </div>
          <div className={`${styles.wrapper} ${styles.channelWrapper}`}>
            <h3 className={styles.title}>Channels</h3>
            {channel.map((el, index) => (
              <Button link key={`channel-${index}`}>
                <FollowCard
                  channel
                  slug={el.slug}
                  subscribers={el.subscribers}
                  imageLink={el.imageLink}
                />
              </Button>
            ))}
            <Button className={styles.button}> Find More</Button>
          </div>
          <div className={styles.wrapper}>
            <h3 className={styles.title}>Who to follow?</h3>
            {users.map((el, index) => (
              <FollowCard
                key={`follow-${index}`}
                slug={el.slug}
                followers={el.followers}
                imageLink={el.imageLink}
              />
            ))}
            <Button className={styles.button}>Discover All</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

GamesHub.propTypes = {
  channel: PropTypes.arrayOf(PropTypes.object),
  users: PropTypes.arrayOf(PropTypes.object),
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default GamesHub;
