import PropTypes from "prop-types";
import React from "react";

export const InfoDisplay = ({ info = "N/A" }) => (
  // TODO: Add transitions (https://reactjs.org/docs/animation.html)
  <p>{info}</p>
);
InfoDisplay.propTypes = {
  info: PropTypes.string.isRequired,
};
