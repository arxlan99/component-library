import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ icon, componentCount, name, link, bgColor }) => {
  return (
    <div
      className={`${
        bgColor ? bgColor : "bg-white"
      } border-2 border-black rounded-lg py-7 flex flex-col item px-7 text-left hover:shadow-xl transition-all cursor-pointer`}
    >
      <Link to={`/${link}`}>
        <div className="text-xl">{icon}</div>
        <div className="text-lg font-medium mt-4">{name}</div>
        <div className="text-sm">{componentCount} components</div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  componentCount: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
};

export default Card;
