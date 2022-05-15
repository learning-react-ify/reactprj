import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useParams,
  useNavigate,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>React Router Tutorial</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:idr" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const nav = useNavigate();

  const fn = () => {
    nav("/profile");
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={fn}>Go to Profile</button>
    </>
  );
}

function Profile() {
  const nav = useNavigate();

  const fn = () => {
    nav("/");
  };

  return (
    <>
      <h1>Profile</h1>
      <button onClick={fn}>Go to Home</button>
    </>
  );
}

function About() {
  return <h1>About</h1>;
}

function Contact() {
  const nav = useNavigate();

  const fn = () => {
    nav("/");
  };

  return (
    <>
      <h1>Contact</h1> <button onClick={fn}>Go to Home</button>
    </>
  );
}

function NotFound() {
  return <h1>Not Found</h1>;
}

function User() {
  const { idr } = useParams();

  return <h1>User: {idr}</h1>;
}

export default App;
