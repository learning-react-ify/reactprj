import "./App.css";
import React from "react";

function App() {
  const HComp = WithRoute(Comp, "/profile");
  const AuthComp = WithAuth(AuthComp2);
  return (
    <>
      <HComp />
      <AuthComp />
    </>
  );
}

function WithAuth(Comp) {
  const token = window.localStorage.getItem("_token") ? true : false;
  return () => {
    return token ? <Comp /> : null;
  };
}

function WithComponent(Component) {
  return function (props) {
    return <Component {...props} />;
  };
}

function Comp() {
  return <div>Hello</div>;
}

function AuthComp2() {
  return <div>Hello, I am a Protected Compoennt.</div>;
}

function WithRoute(_Comp, route) {
  return () => {
    return window.location.pathname === route && <_Comp />;
  };
}

export default App;
