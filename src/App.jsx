//App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import initialContacts from './contacts.json';

function App() {
  // const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    try {
      const savedContacts = window.localStorage.getItem('saved-contacts');
      return savedContacts ? JSON.parse(savedContacts) : initialContacts;
    } catch (error) {
      console.error('Error parsing saved contacts from localStorage:', error);
      return initialContacts;
    }
  });

  useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };
  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contacts={visibleContacts} onDelete={deleteContact} />
      </div>
    </>
  );
}

export default App;
