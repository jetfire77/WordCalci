import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //  console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    //  console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleClearClick = () => {
    //  console.log("Uppercase was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };

  const handleCopy = () => {
    console.log(" i am copy ");
    var text = document.getElementById("mybox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed", "success");
  };

  const handleOnChange = (event) => {
    // console.log(" on change clicked");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading} </h1>
        <div className=" mb-3">
          <textarea
            className="form-control"
            id="mybox"
            onChange={handleOnChange}
            value={text}
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear text
        </button>

        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copytext
        </button>

        <button
          className="btn btn-primary my-2 mx-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1> Your text summary </h1>
        <p>
          {text.split(" ").length} words and {text.length} character{" "}
        </p>
        <p> {0.008 * text.split(" ").length} Minutes read</p>
        <h2> Preview</h2>
        <p>
          {" "}
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here "}
        </p>
      </div>
    </>
  );
}
