import React from "react";
import { ContactCard as Card } from "./components/ContactCard";
import { getContacts } from "./api";

export class App extends React.Component {
  state = { contacts: [] };

  renderCards = () =>
    this.state.contacts.map(
      ({ cell, dob, email, location, name, picture }, index) => (
        <Card
          cell={cell}
          dob={dob}
          email={email}
          location={location}
          name={name}
          picture={picture}
          key={index}
        />
      )
    );

  async componentDidMount() {
    const contacts = await getContacts();
    this.setState({ contacts });
  }

  render() {
    return this.renderCards();
  }
}
