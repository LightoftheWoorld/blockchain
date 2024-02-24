import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const signUpSchema = yup.object().shape({
  firstname: yup
    .string()
    .trim()
    .min(3, "Invalid Name")
    .required("First Name required!"),
  lastname: yup
    .string()
    .trim()
    .min(3, "Invalid Name")
    .required("Last Name required!"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmpassword: yup
    .string()
    .equals([yup.ref("password"), null], "Password doesn't match 1"),
  acceptedTos: yup
    .boolean()
    .oneOf([true], "Please accept the terms of service"),
});

export const otpSchema = yup.object().shape({
  otp1: yup.number().min(1, "Input Otp").max(1).required("Required"),
  otp2: yup.number().min(1, "Input Otp").max(1).required("Required"),
  otp3: yup.number().min(1, "Input Otp").max(1).required("Required"),
  otp4: yup.number().min(1, "Input Otp").max(1).required("Required"),
  otp5: yup.number().min(1, "Input Otp").max(1).required("Required"),
  otp6: yup.number().min(1, "Input Otp").max(1).required("Required"),
});

export const signInSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup
      .string()
      .min(5)
    //   .matches(passwordRules, { message: "Please create a stronger password" })
      .required("Required"),
  });