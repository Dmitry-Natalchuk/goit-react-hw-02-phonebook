import { nanoid } from "nanoid";
import {Component} from "react"

import { Section } from "./Section/Section";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }
  addContactList = ({name,number}) => {
    const {contacts} = this.state

    const data = {
      id : nanoid(),
      name,
      number,
    };

    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())){
      alert(`${name} is already in contacts.`);
    } else if(contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [data, ...contacts],
    }))
  } 
}
deleteContactItem = id => {
  this.setState(({contacts}) => ({
    contacts : contacts.filter(contact => contact.id !== id)
  }))
};

changeContact = event => {
  this.setState({filter : event.e.currentTarget.value})
}

chekContact = () => {
  const {contacts,filter} = this.state
  return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
}

render() {
  const { filter } = this.state;

  return (
    <>
    <Section title="Phonebook">
    <ContactForm onSubmit={this.addContactList} />
    </Section>
    <Section title = "Contacts">
    <Filter value={filter} 
      changeContact={this.changeContact} 
      />
    </Section> 

    </>
  )
}
};
