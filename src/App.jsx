import React from "react";
import Login from "./components/auth/login";
import Employeedsb from "./components/DashBoard/Employeedsb";
import Admindsb from "./components/DashBoard/admindsb";

import Headers from "./components/Others/Headers";
import { useEffect } from "react";
import { useState } from "react";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import Login2 from "./components/auth/Login2";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()

  // },)

  const handleLogin = (email, password) => {
    console.log(
      "user login in app.jsx with email  ",
      email + "and password ",
      password
    );
    // const data = "check this is showing in login or not "

    if (email == "admin@gmail.com" && password == "123") {
      console.log("admin is :", email, password);
      setUser("admin");
      console.log("user is ", user);
    } else if (
      data &&
      data.employee.find((e) => email == e.email && e.password == password)
    ) {
      console.log("user is enployee logedin ", email);
      setUser("employee");
      console.log("user is ", user);
    } else {
      alert("invalid credentialssssss", email, password);
    }
  };

  const data = useContext(AuthContext);
  console.log(" data from auth context is: ", data.admin);

  // const email = 'admin@gmail.com';
  // const password = '123';
  // handleLogin();

  const [user, setUser] = useState(null);
  // console.log("now user is ", user)
  // console.log("user is ", user)
  // console.log("user is", user, "is truthy?", !!user);

  // setUser("admin@gmail.com")

  // const clearLocalStorage = () => {
  //   localStorage.clear();
  //   console.log('Local Storage cleared!');
  // };

  // clearLocalStorage();
  console.log("final user check ", user);

  return (
    <>
      {/* <Login2 /> */}

      {!user ? (
        <Login2 handleLogins={handleLogin} />
      ) : user === "admin" ? (
        <Admindsb />
      ) : (
        <Employeedsb />
      )}


      {/* {!user ? <Login2 handleLogins={handleLogin} /> : ''} */}
      {/*if is user is not there i.e null go to login // else blank  */}
      {/* {user === 'admin' ? <Admindsb /> : <Employeedsb />} */}
      {/* if user is == admin open admin else open employee */}

      {/* <Employeedsb></Employeedsb> */}

      {/* <Admindsb></Admindsb> */}
    </>
  );
};

export default App;
