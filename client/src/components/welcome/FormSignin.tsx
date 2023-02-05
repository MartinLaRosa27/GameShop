import React from "react";
import Modal from "react-bootstrap/Modal";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useUserContext } from "../../context/UserContext";

export const FormSignin = (props: any) => {
  const router = useRouter();
  const { postUser } = useUserContext();

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      passwordAux: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("The email direction is required.")
        .email("Invalid email.")
        .max(255, "The email only can have up 255 characters."),
      username: Yup.string()
        .required("The username direction is required.")
        .matches(/^\S*$/, "The username cannot have spaces")
        .max(30, "The username only can have up 30 characters."),
      password: Yup.string()
        .required("The password is required.")
        .min(8, "The password only can have between 8 and 25 characters.")
        .max(25, "The password only can have between 8 and 25 characters.")
        .matches(
          /^[0-9a-zA-Z]+$/,
          "The password can only contain lowercase letters, uppercase letters, and numbers."
        )
        .oneOf([Yup.ref("passwordAux")], "The passwords entered do not match."),
      passwordAux: Yup.string().required("The password check is required."),
    }),
    onSubmit: async (formData: Object) => {
      if (await postUser(formData)) {
        router.push("/");
      }
    },
  });

  return (
    <div id="welcome-formsignin">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create an account in GameShop
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
              {formik.errors.email && formik.values.email.length !== 0 && (
                <small className="text-danger">{formik.errors.email}</small>
              )}
              <label>Email address</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.errors.password &&
                formik.values.password.length !== 0 && (
                  <small className="text-danger">
                    {formik.errors.password}
                  </small>
                )}
              <label>Password</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="passwordAux"
                onChange={formik.handleChange}
                value={formik.values.passwordAux}
              />
              {formik.errors.passwordAux &&
                formik.values.passwordAux.length !== 0 && (
                  <small className="text-danger">
                    {formik.errors.passwordAux}
                  </small>
                )}
              <label>Verify Password</label>
            </div>

            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
              {formik.errors.username &&
                formik.values.username.length !== 0 && (
                  <small className="text-danger">
                    {formik.errors.username}
                  </small>
                )}
              <label>Userame</label>
            </div>

            <button
              type="submit"
              className="btn btn-primary mt-3"
              disabled={
                formik.errors.password != undefined ||
                formik.errors.email != undefined ||
                formik.errors.passwordAux != undefined ||
                formik.errors.username != undefined ||
                formik.values.passwordAux.length === 0 ||
                formik.values.email.length === 0 ||
                formik.values.password.length === 0 ||
                formik.values.username.length === 0
              }
              style={{ background: "#fff159", borderColor: "#f9f9fa" }}
            >
              Log In
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
