export default function Contact(onDelete, data) {
  console.log(data);
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.number}</p>
      <button onClick={onDelete}></button>
    </div>
  );
}
