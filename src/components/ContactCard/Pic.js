import PropTypes from "prop-types";
import React from "react";

export const Pic = ({ name, pic }) => (
  <figure>
    <img src={pic.large} alt="" />
    <figcaption>
      {name.first} {name.last}
    </figcaption>
  </figure>
);
Pic.propTypes = {
  pic: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired,
};
