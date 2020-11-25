import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function RegistrationForm() {
  const options = [
    { key: "Email", value: "emailmoc" },
    { key: "Telephone", value: "telephonemoc" },
  ];

  const dropdownOptions = [
    { key: "Select your course", value: "" },
    { key: "React", value: "react" },
    { key: "Angular", value: "angular" },
    { key: "Vue", value: "vue" },
  ];

  const checkboxOptions = [
    { key: 'HTML', value: 'html' },
    { key: 'CSS', value: 'css' },
    { key: 'JavaScript', value: 'javascript' }
  ]

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
    skills: [],
    courseDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Required"),
    modeOfContact: Yup.string().required("Required"),
    phone: Yup.string().when("modeOfContact", {
      is: "telephonemoc",
      then: Yup.string().required("Required"),
    }),
    course: Yup.string().required("Required"),
    skills: Yup.array()
    .min(1)
    .max(3).required("Required"),
    courseDate: Yup.date().required("Required").nullable()
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
    alert(JSON.stringify(values) )
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="input"
              type="password"
              label="Password"
              name="password"
            />
            <FormikControl
              control="input"
              type="password"
              label="Confirm Password"
              name="confirmPassword"
            />
            <FormikControl
              control="radio"
              label="Mode of contact"
              name="modeOfContact"
              options={options}
            />
            <FormikControl
              control="input"
              type="text"
              label="Phone number"
              name="phone"
            />
            <FormikControl
              control="select"
              label="Course"
              name="course"
              options={dropdownOptions}
            />
             <FormikControl
              control='checkbox'
              label='Your skillset'
              name='skills'
              options={checkboxOptions}
            />
            <FormikControl
            control='date'
            label='Pick a date'
            name='courseDate'
          />
            <button className="button button-submit" type="submit" disabled={!formik.isValid}>
              Submit
            </button>
            <button className="button button-reset" type="reset">
              Reset
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default RegistrationForm;
