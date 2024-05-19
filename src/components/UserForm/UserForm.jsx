import css from './UserForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const UserSchema = Yup.object().shape({
  username: Yup.string().min(3, 'Min 3 chars!').required('Is required!'),
  email: Yup.string().email('Must be a valid email!').required('Is required'),
  role: Yup.string().oneOf(['guest', 'user', 'admin']).required('Is required!'),
  comment: Yup.string().max(20, 'Max 20 chars').required('Is required'),
});

export default function UserForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    // console.log('handleSubmit!', values);
    onAdd(values);
    actions.resetForm();
  };
  return (
    //in inatialValues obj with, name prop = Field name , value prop we may set in obj. it updates itself, update state. Еhis is a type of controlled form "under the hood".
    //when we submit form Formik call onSubmit
    <Formik
      initialValues={{
        username: '',
        email: '',
        role: '',
        comment: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={UserSchema} //rule from docs
    >
      <Form className={css.form}>
        <div className={css.group}>
          <label>Username</label>
          <Field name="username" />
          <ErrorMessage
            name="username"
            className={css.error}
            component="span"
          />
        </div>
        <div className={css.group}>
          <label>Email:</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" className={css.error} component="span" />
        </div>
        <div className={css.group}>
          <label>Role:</label>
          <Field as="select" name="role">
            <option value="guest">Guest</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </Field>
          <ErrorMessage name="role" className={css.error} component="span" />
        </div>
        <div className={css.group}>
          <label>Comment:</label>
          <Field as="textarea" name="comment" />
          <ErrorMessage name="comment" className={css.error} component="span" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
