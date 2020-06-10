import "font-awesome/css/font-awesome.min.css";
import PropTypes from "prop-types";
import React from "react";
import "./InfoToggle.css";
import styles from "./InfoToggle.module.css";
import "font-awesome/css/font-awesome.min.css";

export class InfoToggle extends React.Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    info: PropTypes.string,
    stProxy: PropTypes.object,
  };

  handleClick = () => {
    this.props.stProxy.activeInfo = this.props.info;
  };

  render() {
    const className =
      this.props.stProxy.state.activeInfo === this.props.info
        ? `InfoToggle fa fa-${this.props.icon} ${styles.active}`
        : `InfoToggle fa fa-${this.props.icon} `;

    return <span className={className} onClick={this.handleClick} />;
  }
}
