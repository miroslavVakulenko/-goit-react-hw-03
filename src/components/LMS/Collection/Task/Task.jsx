import css from './Task.module.css';

export default function Task({ data: { id, text }, onDelete }) {
  return (
    <div className={css.container}>
      <p className={css.text}>{text}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
