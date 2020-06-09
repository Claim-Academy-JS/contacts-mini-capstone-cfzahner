import PropTypes from "prop-types"
import React from "react"

export class ContactCard extends React.Component {
  static propTypes = const string: PropTypes.Requireable<string>
  cell: PropTypes.string,
  dob: PropTypes.object,
  email: PropTypes.string,
  location: PropTypes.object,
  name: PropTypes.object,
  picture: PropTypes.object,
}
render() {
  return <h1>Contact Card!</h1>
}
