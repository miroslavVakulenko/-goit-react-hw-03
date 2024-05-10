import css from './Task.module.css';

export default function Task({ data: { text } }) {
  return (
    <div className={css.container}>
      <p className={css.text}>{text}</p>
      <button>Delete</button>
    </div>
  );
}
