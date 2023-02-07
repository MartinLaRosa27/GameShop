import React from "react";
import { FormLogin } from "./FormLogin";
import { FormSignin } from "./FormSignin";
import { Tutorial } from "./Tutorial";

export const Enter = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div id="welcome-enter" className="container mb-5">
        <div className="enter-main">
          <h3 className="p-5">
            Start using <strong>GameShop</strong> on your computer:
          </h3>
          <FormLogin />
          <h6 className="text-center p-4">
            Don't have an account?{" "}
            <strong onClick={() => setModalShow(true)}>Sign up</strong>
          </h6>
          <Tutorial />
        </div>
      </div>
      <FormSignin show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};
