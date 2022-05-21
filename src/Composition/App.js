import "./App.css";
import React from "react";

function App() {
  const HModalLoginForm = WithRoute(ModalLoginForm, "/login");
  const HModalRegisterForm = WithRoute(ModalRegisterForm, "/register");
  const HModalEditForm = WithRoute(ModalEditForm, "/edit");
  return (
    <>
      <a href="/login">Login</a>
      <a href="/register">Register</a>
      <a href="/edit">Edit</a>

      <HModalLoginForm />
      <HModalRegisterForm />
      <HModalEditForm />
    </>
  );
}

function WithRoute(Comp, route) {
  const isRoute = window.location.pathname === route;
  return () => {
    return isRoute && <Comp />;
  };
}

function ModalHeader({ children }) {
  return (
    <div className="modal-head">
      <h2>{children}</h2>
      <span className="close-icon">X</span>
    </div>
  );
}

function ModalBody({ children }) {
  return <div className="modal-body">{children}</div>;
}

function ModalFooter({ value }) {
  return (
    <div className="modal-footer">
      <input type="submit" value={value} />
    </div>
  );
}

function Modal({ children, footerValue, headerValue }) {
  return (
    <div className="modal">
      <ModalHeader>{headerValue}</ModalHeader>
      {children}
      <ModalFooter value={footerValue} />
    </div>
  );
}

function ModalLoginForm() {
  return (
    <Modal footerValue="Login" headerValue="Log In">
      <ModalBody>
        <input type="text" placeholder="Enter your username here..." />
        <input type="password" placeholder="Enter your password here..." />
      </ModalBody>
    </Modal>
  );
}

function ModalRegisterForm() {
  return (
    <Modal footerValue="Register" headerValue="Register">
      <ModalBody>
        <input type="text" placeholder="Enter your username here..." />
        <input type="email" placeholder="Enter your email here..." />
        <input type="password" placeholder="Enter your password here..." />
        <input type="password" placeholder="Re-type your password here..." />
      </ModalBody>
    </Modal>
  );
}

function ModalEditForm() {
  const editFn = () => {
    console.log("Edit");
  };

  return (
    <Modal footerValue="Edit" headerValue="Edit">
      <ModalBody>
        <input type="text" placeholder="Enter new usernam here..." />
      </ModalBody>
    </Modal>
  );
}

export default App;
