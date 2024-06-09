import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'Yup';

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Must be 3 characters')
    .max(50, '50 characters max')
    .required('Is Required'),
  number: Yup.string()
    .min(3, 'Must be 3 characters')
    .max(50, '50 characters max')
    .required('Is Required'),
});

export default function ContactForm({ onAdd }) {
  const handleSubmit = ({ name, number }, actions) => {
    onAdd({
      id: nanoid(),
      name: name,
      number: number,
    });
    actions.resetForm();
    console.log('submit');
  };
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field type="text" name="name" />
        <ErrorMessage name="name" />
        <Field type="text" name="number" />
        <ErrorMessage name="number" />
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
}
