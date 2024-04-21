import { useContext } from "react";

import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { PhoneBookContext } from "../../context/phoneBook";
import { Contact } from "../../types/contact";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  mobile: Yup.string().required("Required"),
});

export default function AddContactForm() {
  const { updateContact } = useContext(PhoneBookContext);

  function handleSubmit(values: Contact) {
    const name = values["name"];
    alert(`${name} saved successfully`);
    updateContact({ ...values });
  }

  return (
    <Formik
      initialValues={{
        _id: "",
        name: "",
        organisation: "",
        email: "",
        mobile: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values: Contact) => {
        handleSubmit(values);
      }}
    >
      {(formik) => (
        <Form className="add-contact-form">
          <Field name="name" type="text" placeholder="Name" />
          <ErrorMessage className="error-msg" name="name" component="div" />

          <Field name="organisation" type="text" placeholder="organisation" />

          <Field name="email" type="email" placeholder="Email" />
          <ErrorMessage className="error-msg" name="email" component="div" />

          <Field name="mobile" type="text" placeholder="Mobile" />
          <ErrorMessage className="error-msg" name="mobile" component="div" />

          <button type="submit" disabled={!formik.isValid}>
            Save
          </button>
        </Form>
      )}
    </Formik>
  );
}
