import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";

const BasicLayout = ({ children, title, description, keywords, footerMenu }) => {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <title>{title} | Lean Scale</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1, user-scalable=0"
        />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Lean Scale" />
      </Head>
      <Header />
      <Navigation />
      <main>{children}</main>
      <Footer menu={footerMenu} />
    </React.Fragment>
  );
};

BasicLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  footerMenu: PropTypes.object
};

BasicLayout.defaultProps = {
  children: "",
  title: "Home",
  description: "description website",
  keywords: "lean,scale,lean"
};

export default BasicLayout;
