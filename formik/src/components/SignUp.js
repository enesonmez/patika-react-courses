import { Formik, useFormik } from "formik";

import validationSchema from "./validations";

function SignUp() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email </label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email && (
          <div className="error">{formik.errors.email}</div>
        )}
        <br /> <br />
        <label htmlFor="password">Password </label>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.password && formik.touched.password && (
          <div className="error">{formik.errors.password}</div>
        )}
        <br /> <br />
        <label htmlFor="passwordConfirm">Password Confirm </label>
        <input
          type="password"
          name="passwordConfirm"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
          <div className="error">{formik.errors.passwordConfirm}</div>
        )}
        <br /> <br />
        <button type="submit">Submit</button>
        <br /> <br />
        {JSON.stringify(formik.values)}
      </form>
    </div>
  );
}

export default SignUp;
