import React from "react";
import { ContactCard as Card } from "./components";
import { getContacts } from "./api";

export class App extends React.Component {
  state = { contacts: [] };

  async componentDidMount() {
    const contacts = await getContacts();
    this.setState({ contacts });
  }

  render() {
    return this.renderCards();
  }
}
