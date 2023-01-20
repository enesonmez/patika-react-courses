import * as yup from "yup";

let validations = yup.object({
  email: yup.string().email("Email olmalıdır.").required(),
  password: yup.string().min(5).required(),
  passwordConfirm: yup.string().oneOf([yup.ref('password')]).required()
});

export default validations;