import React, { useState } from "react";
import PropTypes from "prop-types";

const ReadMore = ({ children, max, className, spanStyle }) => {
  const textCount = children.length;
  const [truncated, setTruncated] = useState(true);
  const text = truncated ? children.slice(0, max).concat("...") : children;
  const toggleMore = () => {
    setTruncated(!truncated);
  };

  if (textCount > max) {
    return (
      <p className={className}>
        {text}
        {truncated ? (
          <span aria-hidden="true" className={spanStyle} onClick={toggleMore}>
            Read More
          </span>
        ) : (
          ""
        )}
      </p>
    );
  } else {
    return <p>{children}</p>;
  }
};

ReadMore.propTypes = {
  className: PropTypes.string,
  spanStyle: PropTypes.string,
  max: PropTypes.number,
  children: PropTypes.string
};
ReadMore.defaultProps = {
  className: "container",
  spanStyle: "span",
  max: 182,
  children: "this is default text"
};

export default ReadMore;
