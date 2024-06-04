//App.jsx
import { useState } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import initialContacts from './contacts.json';

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };
  const deleteContact = contactId => {
    setContacts(prevContacts => {
      // console.log('delete contact', contactId);
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };
  // console.log(contacts);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  // console.log(visibleContacts);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        {/* <button onClick={visibleContacts}></button> */}
        <ContactForm onAdd={addContact} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contacts={visibleContacts} onDelete={deleteContact} />
      </div>
    </>
  );
}

export default App;
