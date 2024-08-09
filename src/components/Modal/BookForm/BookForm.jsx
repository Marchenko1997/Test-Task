import css from "./BookForm.module.css";
import Icon from "../../Icon/Icon";
import { Formik, Form, useField, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import { useRef } from "react";
import { toast } from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css";

// Кастомный хук для работы с полями формы
const CustomField = ({ ...props }) => {
  const [field] = useField(props);
  return (
    <li className={css.inputGroup}>
      <input {...field} {...props} className={css.inputField} />
      <ErrorMessage name={field.name} component="div" className={css.errorMessage} />
    </li>
  );
};


const bookingFormSchema = Yup.object({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  bookingDate: Yup.date()
    .required("Booking date is required")
    .min(new Date(), "Booking date must be in the future"),
  comment: Yup.string().max(500, "Comment can contain up to 500 characters"),
});

const Bookform = () => {
  const initialValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };

  const datePickerRef = useRef(null);

  
  const handleSubmit = (values, { resetForm }) => {
    toast.success("Your data was successfully sent. Our manager will contact you within 24 hours.");
    resetForm();
  };

  const handleCalendarClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={bookingFormSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values }) => (
        <Form className={css.bookingForm}>
          <h2 className={css.formTitle}>Book your campervan now</h2>
          <p className={css.formDescription}>
            Stay connected! We are always ready to help you.
          </p>
          <ul className={css.formList}>
            <CustomField placeholder="Name" name="name" type="text" />
            <CustomField placeholder="Email" name="email" type="text" />
            <li className={css.dateInputContainer}>
              <DatePicker
                ref={datePickerRef}
                selected={values.bookingDate}
                onChange={(date) => setFieldValue("bookingDate", date)}
                placeholderText="Booking date"
                className={css.inputField}
              />
              <button
                type="button"
                className={css.calendarButton}
                onClick={handleCalendarClick}
              >
                <Icon className={css.calendarIcon} nameIcon="calendar" />
              </button>
              <ErrorMessage name="bookingDate" component="div" className={css.errorMessage} />
            </li>
            <CustomField
              as="textarea"
              name="comment"
              placeholder="Comment"
              className={`${css.inputField} ${css.commentField}`}
            />
          </ul>
          <button type="submit" className={css.submitButton}>
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Bookform;