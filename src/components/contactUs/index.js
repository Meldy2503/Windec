import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MainContainer } from "../../components/reusableComponents/ContainerStyled";
import {
  Contents,
  Title,
  FormContainer,
  FormContents,
  InputContainer,
} from "./contactUsStyle";
import { Button } from "../../components/reusableComponents/ButtonStyled";
import Alert from "../reusableComponents/Alert/Alert";

function Form() {
  const [showAlert, setShowAlert] = React.useState(null);
  const handleShowAlert = (message) => {
    setShowAlert({ msg: message });
    setTimeout(() => {
      setShowAlert(null);
    }, 6000);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, "Must be 5 characters or more")
        .required("Required"),
      email: Yup.string()
        .email("Enter a valid email address")
        .required("Required"),
      phoneNumber: Yup.string()
        .max(14, "Enter a valid phone number")
        .required("Required"),
      subject: Yup.string()
        .min(5, "Must be 5 characters or more")
        .required("Enter subject"),
      message: Yup.string()
        .min(5, "Must be 5 characters or more")
        .required("Enter message"),
    }),

    onSubmit: (values, { resetForm }) => {
      resetForm();
      handleShowAlert(
        "Thanks for contacting Windec, we will get back to you soon"
      );
      console.log(values);
    },
  });

  return (
    <MainContainer bgco="#fff">
      <Contents>
        <Title data-aos="zoom-in">
          <h2>Contact Us</h2>
          <p>
            For technical support, business consultations or general inquiries,
            our customer service teams are ready to serve you 24/7, 365 days.
          </p>
        </Title>

        <FormContainer data-aos="fade-up" onSubmit={formik.handleSubmit}>
          <FormContents data-aos="fade-up">
            <InputContainer>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <p className="errors">{formik.errors.name}</p>
              ) : null}
            </InputContainer>

            <InputContainer>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="errors">{formik.errors.email}</p>
              ) : null}
            </InputContainer>

            <InputContainer>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                id="phoneNumber"
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <p className="errors">{formik.errors.phoneNumber}</p>
              ) : null}
            </InputContainer>

            <InputContainer>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                placeholder="Provide context"
                id="subject"
                name="subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.subject && formik.errors.subject ? (
                <p className="errors">{formik.errors.subject}</p>
              ) : null}
            </InputContainer>
          </FormContents>

          <label htmlFor="message">Message</label>
          <textarea
            placeholder="Write your question here"
            id="message"
            name="message"
            cols="30"
            rows="6"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.message && formik.errors.message ? (
            <p className="errors">{formik.errors.message}</p>
          ) : null}
          <br />
          <span>
            <Button
              to="/contact-us"
              type="submit"
              bgc="#1B1C2B"
              bgh="#282938"
              color="#fff"
              padding="1.4rem 8rem"
              onClick={formik.handleSubmit}
            >
              Send Message
            </Button>
          </span>
        </FormContainer>
        <Alert showAlert={showAlert} />
      </Contents>
    </MainContainer>
  );
}

export default Form;
