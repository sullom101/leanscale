import React from "react";
import PropTypes from "prop-types";
import styles from "./post-list.module.scss";
import Comment from "../Comment/Comment";

const PostList = (props) => {
  const call = [0, 1, 2];
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Latest posts</h3>
      {call.map((el) => (
        <Comment className={styles.commentWrapper} />
      ))}
    </div>
  );
};

PostList.propTypes = {};

export default PostList;
