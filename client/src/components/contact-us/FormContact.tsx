import React from "react";

export const FormContact = () => {
  return (
    <div id="contactUs-formContact" className="container pt-5 pb-5">
      <h3 className="mb-4">Tell Us Your Message</h3>
      <form method="POST">
        <div className="fullName">
          <div className="form-floating mb-3">
            <input type="text" className="form-control" />
            <label>First Name</label>
          </div>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" />
            <label>Last Name</label>
          </div>
        </div>

        <div className="form-floating mb-3">
          <input type="email" className="form-control" />
          <label>Email address</label>
        </div>

        <div className="form-floating">
          <textarea className="form-control"></textarea>
          <label>Comments</label>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Send Message
        </button>
      </form>
    </div>
  );
};
