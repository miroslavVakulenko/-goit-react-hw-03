import css from './UserForm.module.css';
import { Formik, Form, Field } from 'formik';

export default function UserForm({ onAdd }) {
  const handleSubmit = () => {
    console.log('handleSubmit!');
  };
  return (
    //in inatialValues obj with, name prop = Field name , value prop we may set in obj. it updates itself, update state. Еhis is a type of controlled form "under the hood".
    //when we submit form Formik call onSubmit
    <Formik
      initialValues={{
        username: 'mango',
        email: 'vak@gmail.com',
        role: 'User',
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.group}>
          <label>Username</label>
          <Field name="username" />
        </div>
        <div className={css.group}>
          <label>Email:</label>
          <Field type="email" name="email" />
          {/* <input type="text" name="email" required /> */}
        </div>
        <div className={css.group}>
          <label>Role:</label>
          <Field as="select" name="role" />
          <option value="guest">Guest</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <Field />
        </div>
        <div className={css.group}>
          <label>Comment:</label>
          {/* <input type="text" name="comment" required /> */}
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
