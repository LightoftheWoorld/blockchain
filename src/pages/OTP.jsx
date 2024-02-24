import classNames from "classnames";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { otpSchema } from "../schemas";

const otp =
  "w-16 h-16 flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-[#00A699] uppercase";

const OTP = () => {
  const onSubmit = async (values, actions) => {
    navigate("/otp", { replace: true });

    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
  // const [otp, setOtp] = useState("");
  // const [code, setCode] = useState("");

  // const handleChange = (code) => setCode(code);

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
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
      otp5: "",
      otp6: "",
    },
    validationSchema: otpSchema,
    onSubmit,
  });

  console.log(errors);
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col max-w-[500px] py-[40%]">
      <div className="w-full flex flex-col mb-2">
        <h3 className="text-3xl font-semibold mb-2 font-['Urbanist']">
          OTP verification🔒
        </h3>
        <p className="text-sm text-black text-opacity-50 font-normal">
          An email has been sent to you containing a one time password
        </p>

        <p className="text-center text-teal-600 text-lg font-semibold font-['Urbanist'] py-4">
          05:23
        </p>
      </div>

      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="w-full flex flex-col">
          <div className="flex flex-row items-center justify-between mx-auto w-full gap-2">
            <input
              type="text"
              id="otp1"
              className={classNames(
                otp,
                errors.otp1 && touched.otp1 ? "input-error" : ""
              )}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.otp1}
              maxLength={1}
            ></input>
            <input
                type="text"
                id="otp2"
                className={classNames(
                  otp,
                  errors.otp2 && touched.otp2 ? "input-error" : ""
                )}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.otp2}
                maxLength={1}
            ></input>
            <input
              type="text"
              id="otp3"
              className={classNames(
                otp,
                errors.otp3 && touched.otp3 ? "input-error" : ""
              )}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.otp3}
              maxLength={1}
            ></input>
            <input
               type="text"
               id="otp4"
               className={classNames(
                 otp,
                 errors.otp4 && touched.otp4 ? "input-error" : ""
               )}
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.otp4}
               maxLength={1}
            >
               {console.log(values.otp4, 1)}
              
            </input>
            <input
                type="text"
                id="otp5"
                className={classNames(
                  otp,
                  errors.otp5 && touched.otp5 ? "input-error" : ""
                )}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.otp5}
                maxLength={1}
            ></input>
             <input
                type="text"
                id="otp6"
                className={classNames(
                  otp,
                  errors.otp6 && touched.otp6 ? "input-error" : ""
                )}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.otp6}
                maxLength={1}
            ></input>
          </div>

          <button
            // onClick={() => navigate("/dashboard")}
            type="text"
            className="w-full mt-8 text-white bg-[#00A699] font-semibold  rounded-md p-2 text-center flex items-center justify-center"
          >
            Continue
          </button>

          <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500 mt-6">
            <p>
              Didn't recieve code?
              <span className="text-blue-600"> Resend</span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OTP;
