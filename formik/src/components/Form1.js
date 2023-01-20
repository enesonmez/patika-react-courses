import React from "react";
import { Formik, useFormik } from "formik";

function Form1() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: "male",
      hobies: [],
      country: "turkiye",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name </label>
        <input name="firstName" onChange={formik.handleChange} />
        <br /> <br />
        <label htmlFor="lastName">Last Name </label>
        <input name="lastName" onChange={formik.handleChange} />
        <br /> <br />
        <span>Male</span>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={formik.handleChange}
          checked={formik.values.gender == "male"}
        />
        <span>Female</span>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={formik.handleChange}
          checked={formik.values.gender == "female"}
        />
        <br /> <br />
        <span>Football</span>
        <input
          type="checkbox"
          name="hobies"
          value="football"
          onChange={formik.handleChange}
        />
        <span>Cinema</span>
        <input
          type="checkbox"
          name="hobies"
          value="cinema"
          onChange={formik.handleChange}
        />
        <span>Photography</span>
        <input
          type="checkbox"
          name="hobies"
          value="photography"
          onChange={formik.handleChange}
        />
        <br /> <br />
        <select
          name="country"
          value={formik.values.country}
          onChange={formik.handleChange}
        >
          <option value="turkiye">Turkiye</option>
          <option value="england">England</option>
          <option value="usa">USA</option>
        </select>
        <br /> <br />
        <button type="submit">Submit</button>
        <br /> <br />
        {JSON.stringify(formik.values)}
      </form>
    </div>
  );
}

export default Form1;
