import React from "react";
import { ContactCard as Card } from "./components";
import { getContacts } from "./api";

export class App extends React.Component {
  state = { contacts: [] };

  renderCards = () =>
    this.state.contacts.map((_, index) => <Card key={index} />);

  async componentDidMount() {
    const contacts = await getContacts();
    this.setState({ contacts });
  }

  render() {
    return this.renderCards();
  }
}
