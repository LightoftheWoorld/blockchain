import React, { useState } from "react";
import GOOGLE_ICON from "../assets/google-icon.svg";
import { useNavigate} from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import classNames from "classnames";


const inputStyles =
  "w-full h-11 text-black py-2 my-2 bg-transparent rounded-md border border-black/40 pl-2";
const checked = "w-[15px] h-[15px] mr-2"

const Signup = () => {
  const navigate = useNavigate();
  
const onSubmit = async (values, actions) => {

  navigate("/otp", { replace: true });

  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

  // const handleSubmit = async (values, { setSubmitting, setErrors }) => {
  //   // try {
  //   //   const response = await fetch("https://localhost:27000/api/signup", {
  //   //     method: "POST",
  //   //     headers: {
  //   //       "Content-Type": "application/json",
  //   //     },
  //   //     body: JSON.stringify(values),
  //   //   });

  //   //   if (!response.ok) {
  //   //     const errorData = await response.json();
  //   //     throw new Error(errorData.message);
  //   //   }

  //   //   // Handle successful signup
  //   //   console.log("Signup successful!");
  //   // } catch (error) {
  //   //   setErrors({ submit: error.message });
  //   // } finally {
  //   //   setSubmitting(false);
  //   // }
  //   console.log(values);
  // };
  const [check, setCheck] = useState(false)
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      firstname: "",
      lastname: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: signUpSchema,
    onSubmit,
  });

  console.log(errors);
  return (
    <div className="w-full flex flex-col max-w-[500px] py-[20%]">
      <div className="w-full flex flex-col mb-2">
        <h3 className="text-3xl font-semibold mb-2">Create your Account 👋</h3>
        <p className="text-sm text-black text-opacity-50  font-normal">
          Let's enter your data to continue to use blockvote
        </p>
      </div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="w-full flex flex-col pt-2">
        <div className="flex justify-between text-[13px]">
            <p className="text-black  font-semibold">First Name</p>
            {errors.password && touched.password && (
              <p className="error text-red-600">{errors.password}</p>
            )}
          </div>
          <input
            type="text"
            id="firstname"
            className={classNames(
              inputStyles,
              errors.firstname && touched.firstname ? "input-error" : ""
            )}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstname}
          />
            <div className="flex justify-between text-[13px]">
            <p className="text-black  font-semibold">Last Name</p>
            {errors.password && touched.password && (
              <p className="error text-red-600">{errors.password}</p>
            )}
          </div>
          <input
            id="lastname"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastname}
            type="text"
            className={classNames(
              inputStyles,
              errors.lastname && touched.lastname ? "input-error" : ""
            )}
          />
            <div className="flex justify-between text-[13px]">
            <p className="text-black  font-semibold">Email</p>
            {errors.password && touched.password && (
              <p className="error text-red-600">{errors.password}</p>
            )}
          </div>
          <input
            value={values.email}
            onChange={handleChange}
            id="email"
            type="email"
            className={classNames(
              inputStyles,
              errors.email && touched.email ? "input-error" : ""
            )}
          />
          <div className="flex justify-between text-[13px]">
            <p className="text-black  font-semibold">Password</p>
            {errors.password && touched.password && (
              <p className="error text-red-600">{errors.password}</p>
            )}
          </div>
          <input
            id="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={classNames(
              inputStyles,
              errors.password && touched.password ? "input-error" : ""
            )}
          />
          <div className="flex justify-between text-[13px]">
            <p className="text-black  font-semibold">Confirm password</p>
            {errors.confirmpassword && touched.confirmpassword && (
              <p className="error text-red-600">{errors.password}</p>
            )}
          </div>
          <input
            id="confirmpassword"
            type="password"
            value={values.confirmpassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className={classNames(
              inputStyles,
              errors.confirmpassword && touched.confirmpassword
                ? "input-error"
                : ""
            )}
          />
        </div>

        <div className="w-full items-center pt-2">
          <div className="w-full flex items-center">
            <input type="checkbox" checked={check} className={classNames(checked, errors.acceptedTos && touched.acceptedTos)} onClick={() => setCheck(!check)} />
            <p className="text-[12px] ">
              By signing up to patty you agree all{" "}
              <span className="text-black font-semibold text-opacity-50 underline">
                terms and conditions
              </span>
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col my-2">
          <button
            disabled={isSubmitting || check === false}
            type="submit"
            className="w-full my-2 text-white bg-[#00A699] font-semibold  rounded-md p-2 text-center flex items-center justify-center"
          >
            Sign up
          </button>
        </div>
      </form>

      <div className="w-full flex items-center justify-center relative py-2">
        <div className="w-full h-[1px] bg-black"></div>
        <div className="w-[45px] text-[#F5F5F5] absolute bg-[#F5F5F5]">
          <p className="text-sm w-[45px] text-black/80 ml-3"> OR</p>
        </div>
      </div>
      <div className="w-full my-4 text-[#060606] bg-transparent border border-black/40 font-semibold rounded-md p-2 text-center flex items-center justify-center cursor-pointer">
        <img src={GOOGLE_ICON} alt="metamask" className="h-5 mr-2" />
        Continue with Google
      </div>
    </div>
  );
};

export default Signup;
