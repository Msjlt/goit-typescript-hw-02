import { Field, Form, Formik } from "formik";
import { toast } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  return (
    <Formik
      initialValues={{ topic: "" }}
      onSubmit={(values, actions) => {
        if (values.topic.trim() === "") {
          toast.error("Please enter text to search for images");
        } else {
          onSearch(values.topic);
          actions.resetForm();
        }
      }}
    >
      <Form className={css.searchBarContainer}>
        <Field className={css.field} type="text" name="topic" />

        <button className={css.button} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
}
