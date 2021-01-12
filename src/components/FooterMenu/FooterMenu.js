import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const FooterMenu = ({ menuListStyle, menuItemStyle, menu, title, titleStyle, menuStyle }) => {
  return (
    <div className={menuStyle}>
      <h6 className={titleStyle}>{title}</h6>
      <ul className={menuListStyle}>
        {menu.map((el, index) => {
          return (
            <li className={menuItemStyle} key={`${title}-${index}`}>
              <Button link href={el.route}>
                {el.name}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

FooterMenu.propTypes = {
  menuItemStyle: PropTypes.string,
  menuListStyle: PropTypes.string,
  titleStyle: PropTypes.string,
  menuStyle: PropTypes.string,
  title: PropTypes.string,
  menu: PropTypes.array
};
FooterMenu.defaultProps = {
  menuItemStyle: "",
  menuListStyle: "",
  titleStyle: "",
  menuStyle: "",
  title: "Title",
  menu: [
    {
      name: "About Us",
      route: "/"
    },
    {
      name: "Careers",
      route: "/"
    },
    {
      name: "Newsroom",
      route: "/"
    },
    {
      name: "Contact",
      route: "/"
    }
  ]
};

export default FooterMenu;
