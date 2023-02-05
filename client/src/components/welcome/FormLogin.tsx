import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useUserContext } from "../../context/UserContext";

export const FormLogin = () => {
  const router = useRouter();
  const { userAuthentication } = useUserContext();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("The email direction is required."),
      password: Yup.string().required("The password is required."),
    }),
    onSubmit: async (formData: Object) => {
      if (await userAuthentication(formData)) {
        router.push("/");
      }
    },
  });

  return (
    <div id="welcome-formlogin" className="container">
      <form onSubmit={formik.handleSubmit} method="POST">
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label>Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <label>Password</label>
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-3"
          disabled={
            formik.errors.password != undefined ||
            formik.errors.email != undefined ||
            formik.values.email.length === 0 ||
            formik.values.password.length === 0
          }
        >
          Log In
        </button>
      </form>
    </div>
  );
};
