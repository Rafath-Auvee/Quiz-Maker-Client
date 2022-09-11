import { useEffect, useState } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Navbar from "./components/shared/Navbar";
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <div className="App">
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        {/* <Route path="signup" element={<Signup />} /> */}
      </Routes>
    </div>
  );
}

export default App;
