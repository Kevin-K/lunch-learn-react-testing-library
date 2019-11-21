import React from "react";
import PropTypes from "prop-types";

const NameTag = ({ firstName, lastName }) => (
  <div>
    <div>Hello user!</div>
    <div> First Name: {firstName}</div>
    <div> Last Name: {lastName}</div>
  </div>
);

NameTag.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string
};
export default NameTag;
