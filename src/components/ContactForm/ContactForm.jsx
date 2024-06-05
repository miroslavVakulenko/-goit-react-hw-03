import { nanoid } from 'nanoid';

export default function ContactForm({ onAdd }) {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
    onAdd({
      id: nanoid(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    });
    console.log('submit');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <input type="text" name="number" />
      <button type="submit">Add Contact</button>
    </form>
  );
}
