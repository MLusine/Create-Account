import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[A-Z]).{5,}$/;
//min 5 characters, 1 upper case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  team_name:yup.number().positive().integer().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
  .string()
  .min(5)
  .matches(passwordRules, { message: "Please create a stronger password" })
  .required("Required"),
})