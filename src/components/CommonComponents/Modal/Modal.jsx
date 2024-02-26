import React from "react";
import "./Modal.css";
import { IoMdCloseCircle } from "react-icons/io";

function Modal({ closeModal, modalType }) {
  return (
    <section className="modal">
      <IoMdCloseCircle
        className="close-icon"
        onClick={() => closeModal({ open: false })}
      />

      {modalType === "Sign in" && (
        <div className="auth-component">
          <h2 className="popup-title">Nice to see you again!</h2>

          <div className="input-fields">
            <input type="email" placeholder="Your email here..." />
            <input type="password" placeholder="Your password here..." />
          </div>

          <div className="login-button">
            <button className="btn">Sign in</button>
            <p>
              Don't have an account yet?{" "}
              <span onClick={() => closeModal({ type: "Sign up", open: true })}>
                Sign up here
              </span>
            </p>
          </div>
        </div>
      )}

      {modalType === "Sign up" && (
        <div className="auth-component">
          <h2 className="popup-title">Sign up here!</h2>

          <div className="input-fields">
            <input type="email" placeholder="Your email here..." />
            <input type="password" placeholder="Your password here..." />
            <input type="password" placeholder="Confirm password..." />
          </div>

          <div className="login-button">
            <button className="btn">Sign up</button>
            <p>
              Already have an account?{" "}
              <span onClick={() => closeModal({ type: "Sign in", open: true })}>
                Sign in here
              </span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Modal;
