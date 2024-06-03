export default function ContactForm({ onAdd }) {
  const handleSubmit = e => {
    e.preventDefault();
    onAdd({});
    console.log('submit');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="" id="" />
      <input type="text" name="" id="" />
      <button type="submit">Add Contact</button>
    </form>
  );
}
