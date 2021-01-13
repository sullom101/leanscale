import React from "react";
import PropTypes from "prop-types";

const InputLabel = ({
  searchWrapper,
  labelStyle,
  inputStyle,
  onChange,
  placeholder,
  value,
  iconStyle,
  iconRight,
  type
}) => {
  if (iconRight) {
    return (
      <div className={searchWrapper}>
        <label className={labelStyle}>
          <input
            className={inputStyle}
            placeholder={placeholder}
            type={type}
            onChange={onChange}
            value={value}
          />
        </label>
        <span className={iconStyle}></span>
      </div>
    );
  } else {
    return (
      <div className={searchWrapper}>
        <label className={labelStyle}>
          <span className={iconStyle}></span>
          <input
            className={inputStyle}
            placeholder={placeholder}
            type={type}
            onChange={onChange}
            value={value}
          />
        </label>
      </div>
    );
  }
};

InputLabel.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  inputStyle: PropTypes.string,
  labelStyle: PropTypes.string,
  searchWrapper: PropTypes.string,
  iconStyle: PropTypes.string,
  iconRight: PropTypes.bool,
  type: PropTypes.string
};

InputLabel.defaultProps = {
  onChange: () => {},
  placeholder: "",
  value: "",
  searchWrapper: "",
  labelStyle: "",
  inputStyle: "",
  iconStyle: "",
  iconRight: false,
  type: "text"
};

export default InputLabel;
