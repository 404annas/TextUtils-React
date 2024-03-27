import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const settingAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setBtnText("Enable Light Mode");
      document.body.style.backgroundColor = "#042743";
      settingAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      setBtnText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      settingAlert("Light Mode Enabled", "success");
    }
  };

  const toggleRed = () => {
    if (mode === "light") {
      setMode("danger");
      document.body.style.backgroundColor = "orange";
      settingAlert("Red Mode Enabled", "danger");
    } else {
      setMode("danger");
      document.body.style.backgroundColor = "orange";
      settingAlert("Red Mode Enabled", "danger");
    }
  };

  const toggleGreen = () => {
    if (mode === "light") {
      setMode("succes");
      document.body.style.backgroundColor = "green";
      settingAlert("Green Mode Enabled", "success");
    } else {
      setMode("success");
      document.body.style.backgroundColor = "green";
      settingAlert("Green Mode Enabled", "success");
    }
  };

  const togglePurple = () => {
    if (mode === "light") {
      setMode("secondary");
      document.body.style.backgroundColor = "purple";
      settingAlert("Purple Mode Enabled", "info");
    } else {
      setMode("secondary");
      document.body.style.backgroundColor = "purple";
      settingAlert("Purple Mode Enabled", "info");
    }
  };

  return (
    <>
      {/* Passing Props To Component */}
      {/* <BrowserRouter> */}
      <Navbar
        home="Utils Home"
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        butText={btnText}
        toggleRed={toggleRed}
        toggleGreen={toggleGreen}
        togglePurple={togglePurple}
      />

      <Alert alert={alert} />

      {/* <Routes>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/" element={<TextForm
          heading="Enter your text to perform actions"
          mode={mode}
          showAlert={settingAlert}/>}>
          </Route>
        </Routes> */}

      <TextForm
        heading="Try TextUtils - Word Counter, Character Counter, Customization Of Text"
        mode={mode}
        showAlert={settingAlert}
      />

      {/* Default */}
      {/* <Navbar/> */}

      {/* <About mode={mode}/> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
