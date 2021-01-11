import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styles from "./comment.module.scss";
import ReadMore from "../ReadMore/ReadMore";
import Button from "../Button/Button";

const Comment = ({
  name,
  userImage,
  username,
  commentText,
  followers,
  commentTime,
  likes,
  comments
}) => {
  return (
    <div className={styles.commentWrapper}>
      <div className={styles.commentHeader}>
        <img src={userImage} alt="img-ico" className={styles.image} />
        <div className={styles.userWrapper}>
          <div className={styles.nameWrapper}>
            <p className={styles.username}>{name}</p>
            <span className={styles.commentTime}>{commentTime}</span>
          </div>
          <div className={styles.slugWrapper}>
            <Button link className={styles.slug} href="/">
              {username}
            </Button>
            {/* <Link href="/">
              <a href="/" className={styles.slug}>
              </a>
            </Link> */}
            <span className={styles.followers}>{followers} Followers</span>
          </div>
        </div>
      </div>
      <div className={styles.commentBody}>
        <ReadMore className={styles.comment} spanStyle={styles.spanStyle}>
          {commentText}
        </ReadMore>
      </div>
      <div className={styles.commentFooter}>
        <div className={styles.commentActionWrapper}>
          <Button className={styles.commentRepost} />
          <Button className={styles.commentForward} />
          <Button className={styles.commentAction} />
          <span className={styles.commentActionCounter}>{likes}</span>
        </div>
        <div className={styles.commentReplyWrapper}>
          {comments > 0 ? (
            <span className={styles.commentCounter}>{comments} Comments</span>
          ) : (
            <span className={styles.noComments}>Add your comment</span>
          )}
          <Button className={styles.commentReply}></Button>
        </div>
      </div>
    </div>
  );
};

Comment.propTypes = {
  userImage: PropTypes.string,
  name: PropTypes.string,
  username: PropTypes.string,
  commentText: PropTypes.string,
  followers: PropTypes.number,
  commentTime: PropTypes.string,
  likes: PropTypes.number,
  comments: PropTypes.number
};
Comment.defaultProps = {
  userImage: "/images/user-ico.png",
  name: "MrPaladin",
  username: "@mrpaladin",
  commentText:
    " Sniper isnt overpowered. \nSniper has some of the lowest damage outputs in the game. 50 damage per shot is terrible, especially with the fire rate. \nCompared to heavy, who has 400+ DPS! tell me how sniper compares. ",
  followers: 15,
  commentTime: "3hrs ago",
  likes: 296,
  comments: 15
};

export default Comment;
