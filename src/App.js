import React from "react";
import { ContactCard as Card } from "./components/ContactCard";
import { getContacts } from "./api";

export class App extends React.Component {
  state = { contacts: [] };

  async componentDidMount() {
    const { results } = await getContacts();
    this.setState({ contacts: results });
  }

  renderCards = () =>
    this.state.contacts.map(
      ({ cell, dob, email, location, name, picture }, index) => (
        <Card
          cell={cell}
          email={email}
          name={name}
          picture={picture}
          key={index}
        />
      )
    );

  render() {
    return this.renderCards();
  }
}
