import React, { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";

class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = (data) => {
    console.log(data);
    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
      </div>
    );
  }
}

export default App;
