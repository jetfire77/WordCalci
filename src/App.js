// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import About from "./components/About";

// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
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
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "WordCalci - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "WordCalci - Light Mode";
    }
  };
  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar
        title="WordCalci"
        aboutText=" About WordCalci"
        mode={mode}
        toggleMode={toggleMode}
      ></Navbar>
      <Alert alert={alert}></Alert>

      <div className="container my-3 ">
        {/* <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={ */}
        <TextForm
          showAlert={showAlert}
          heading=" Enter text to analyse below"
          mode={mode}
        ></TextForm>
        {/* }
            ></Route>
          </Routes> */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
