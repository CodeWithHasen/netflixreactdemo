import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NetflixSignin({ show, onClose }) {
  if (!show) return null; // Don't render if show is false

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
    onClose();
  };

  return (
    <div className="modal show d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Sign In</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-3">
                    <Field type="text" name="email" className="form-control" placeholder="Email or mobile number" />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                  </div>

                  <div className="mb-3">
                    <Field type="password" name="password" className="form-control" placeholder="Password" />
                    <ErrorMessage name="password" component="div" className="text-danger" />
                  </div>

                  <button type="submit" className="btn btn-danger w-100" disabled={isSubmitting}>
                    Sign In
                  </button>

                  <p className="text-center my-3">OR</p>

                  <button type="button" className="btn btn-dark w-100">Use a sign-in code</button>

                  <p className="mt-3">
                    <a href="fp">Forgot Password?</a>
                  </p>

                  <div className="form-check">
                    <Field type="checkbox" name="rememberMe" className="form-check-input" />
                    <label className="form-check-label">Remember me</label>
                  </div>

                  <p className="mt-3">
                    New to Netflix? <a href="sup">Sign up now</a>
                  </p>

                  <p className="text-muted">
                    This page is protected by Google reCAPTCHA to ensure you're not a bot.
                    <br />
                    <a href="lm">Learn more</a>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
