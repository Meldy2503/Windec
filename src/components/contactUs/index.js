import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MainContainer } from "../../components/reusableComponents/ContainerStyled";
import { Contents, Title, FormContents } from "./contactUsStyle";
import { Button } from "../../components/reusableComponents/ButtonStyled";

function Form() {
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
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string()
        .email("Enter a valid email address")
        .required("Required"),
      phoneNumber: Yup.string()
        .max(11, "Enter a valid phone number")
        .required("Required"),
      subject: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Enter subject"),
      message: Yup.string()
        .min(15, "Must be 15 characters or more")
        .required("Enter message"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <MainContainer bgco="#fff">
      <Contents>
        <Title data-aos="fade-up" data-aos-duration="2000">
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            suscipit tempora adipisci, accusamus ipsa.
          </p>
        </Title>

        <FormContents onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="errors">{formik.errors.name}</p>
          ) : null}

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

          <label htmlFor="message">Message</label>
          <textarea
            placeholder="Write your question here"
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.message && formik.errors.message ? (
            <p className="errors">{formik.errors.message}</p>
          ) : null}
          <br />
          <Button type="submit" bgc="#1B1C2B" bgh="#282938" color="#fff">
            Send Message
          </Button>
        </FormContents>
      </Contents>
    </MainContainer>
  );
}

export default Form;
