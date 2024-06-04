export default function ContactForm({ onAdd }) {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
    onAdd({
      id: Date.now(),
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
