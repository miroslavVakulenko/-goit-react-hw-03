import Task from '../Task/Task';
import css from './TaskList.module.css';
export default function TaskList({ tasks }) {
  // console.log(typeof tasks);
  return (
    <>
      <ul>
        {tasks.map(task => (
          <li className={css.item} key={task.id}>
            <Task data={task} />
          </li>
        ))}
      </ul>
    </>
  );
}
