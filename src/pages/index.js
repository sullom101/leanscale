import React from "react";
import Slider from "../components/Slider/Slider";
import GamesHub from "../components/GamesHub/GamesHub";
import UpcomingGames from "../components/UpcomingGames/UpcomingGames";
import Subscribe from "../components/Subscribe/Subscribe";
import BasicLayout from "../components/BasicLayout";
import PropTypes from "prop-types";

const Home = ({ footerMenu, sliderData, comments, channels, users, products }) => {
  return (
    <BasicLayout title="Home" description="something in this page" footerMenu={footerMenu}>
      <Slider slider={sliderData} />
      <GamesHub channel={channels} users={users} comments={comments} />
      <UpcomingGames data={products} />
      <Subscribe />
    </BasicLayout>
  );
};

Home.propTypes = {
  footerMenu: PropTypes.object,
  sliderData: PropTypes.array,
  comments: PropTypes.array,
  channels: PropTypes.array,
  users: PropTypes.array,
  products: PropTypes.array
};

export async function getServerSideProps() {
  const res = await fetch(`${process.env.apiUrl}/data`);
  const data = await res.json();
  const { footerMenu, sliderData, comments, channels, users, products } = data;

  return {
    props: {
      sliderData,
      comments,
      footerMenu,
      channels,
      users,
      products
    }
  };
}

export default Home;
