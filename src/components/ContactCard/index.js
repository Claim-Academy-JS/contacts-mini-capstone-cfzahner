import PropTypes from "prop-types";
import React from "react";
import { Pic } from "./Pic";
import { InfoDisplay } from "./InfoDisplay";
import { InfoToggle } from "./InfoToggle";
import { getStateProxy } from "utils";

import "./ContactCard.css";
import styles from "./Pic.module.css";

export class ContactCard extends React.Component {
  static propTypes = {
    cell: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.object,
    picture: PropTypes.object,
  };

  state = {
    activeInfo: "cell",
  };

  stProxy = getStateProxy(this);

  infoToggles = [
    {
      icon: "mobile",
      info: "cell",
    },
    {
      icon: "envelope",
      info: "cell",
    },
  ];
  renderInfoToggle() {
    return this.infoToggles.map(({ icon, info }) => (
      <InfoToggle key={icon} icon={icon} info={info} stProxy={this.stProxy} />
    ));
  }

  render() {
    return (
      <div className="ContactCard">
        <InfoDisplay info={this.props[this.state.activeInfo]} />
        <Pic name={this.props.name} pic={this.props.picture} />
        <div className={styles.InfoToggle}>{this.renderInfoToggle()}</div>
      </div>
    );
  }
}
