import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const Button = ({ className, onClick, link, href, children }) => {
  if (link) {
    return (
      <Link href={href}>
        <a href={href} className={className}>
          {children}
        </a>
      </Link>
    );
  } else {
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    );
  }
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  link: PropTypes.bool,
  href: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

Button.defaultProps = {
  className: "",
  onClick: () => {},
  link: false,
  href: "/",
  children: ""
};

export default Button;
