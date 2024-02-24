import React from "react";
import "./Modal.css";
import { IoMdCloseCircle } from "react-icons/io";

function Modal({ closeModal }) {
  return (
    <section className="modal">
      <IoMdCloseCircle
        className="close-icon"
        onClick={() => closeModal(false)}
      />
      <div className="auth-component">
        <h2 className="popup-title">Nice to see you again!</h2>

        <div className="input-fields">
          <input type="email" placeholder="Your email here..." />
          <input type="password" placeholder="Your password here..." />
        </div>

        <div className="login-button">
          <button className="btn">Sign in</button>
          <p>
            Don't have an account yet? <span>Sign up here</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Modal;
