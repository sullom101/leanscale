import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const Search = ({
  searchWrapper,
  labelStyle,
  inputStyle,
  onChange,
  placeholder,
  onFocus,
  value,
  iconStyle
}) => {
  return (
    <div className={searchWrapper}>
      <label className={labelStyle}>
        <input
          className={inputStyle}
          placeholder={placeholder}
          type="search"
          id="search"
          autoComplete="off"
          onChange={onChange}
          onFocus={onFocus}
          value={value}
        />
      </label>
      <span className={iconStyle}></span>
    </div>
  );
};

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  inputStyle: PropTypes.string,
  labelStyle: PropTypes.string,
  searchWrapper: PropTypes.string,
  iconStyle: PropTypes.string
};

Search.defaultProps = {
  onChange: () => {},
  onFocus: () => {},
  placeholder: "",
  value: "",
  searchWrapper: "",
  labelStyle: "",
  inputStyle: "",
  iconStyle: ""
};

export default Search;
