import React from "react";
import { ContactCard as Card } from "./components/ContactCard";
import { getContacts } from "./api";

export class App extends React.Component {
  state = { contacts: [] };

  //passing in props, cell={}, braces mean interpolation in jsx
  renderCards = () =>
    this.state.contacts.map(({ cell, email, name, picture }, index) => (
      <Card
        cell={cell}
        email={email}
        name={name}
        picture={picture}
        key={index}
      />
    ));

  async componentDidMount() {
    const { results } = await getContacts();
    this.setState({ contacts: results });
  }

  render() {
    return <main className="App">{this.renderCards()}</main>;
  }
}
