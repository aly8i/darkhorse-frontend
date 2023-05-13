import * as yup from "yup";

// export const loginSchema = () => {
//     return yup.object({
//       email: yup
//         .string()
//         .required("Please enter an email"),
//       password: yup.string().min(6).required("Please enter a password"),
//     });
//   };


  

  export const openSubSchema = () => {
    return yup.object({
      email: yup
        .string()
        .email("Please enter a valid email")
        .required("Please enter an email"),
      password: yup.string().min(6).required("Please enter a password"),
      confirmPassward: yup
        .string()
        .min(6)
        .required("Please enter password confirmation")
        .oneOf([yup.ref("password"), null], "Passwords must match"),
    });
  };
  

  export const loginSchema = yup.object().shape({

    email: yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),
      password: yup.string().min(6).required("Please enter a password"),
  });

  const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  export const registerSchema = yup.object().shape({

    email: yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),
      password: yup.string().min(6).required("Please enter a password"),
      confirmPassward: yup
      .string()
      .min(6)
      .required("Please enter password confirmation")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
      mobile: yup.string()
      .matches(phoneRegExp, "mobile number is not valid")
      .required("mobile is required"),

  });

  
  