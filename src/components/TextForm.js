import React, { useState } from "react";

export default function TextForm(props) {
  let styling = {
    textDecoration: "line-through",
  };

  const handleUpCllick = () => {
    // console.log("Converted To UpperCase" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UpperCase", "success")
  };
  const handleLowCllick = () => {
    // console.log("Converted To LowerCase" + text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To LowerCase", "success")
  };
  const handleClearCllick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Console Cleared", "success")
  };
  const handleCopyClick = () => {
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Text Copied To Clipboard", "success")
  };
  const handleStrikeClick = () => {
    let newText = document.getElementById("myBox");
    document.getElementById("myBox").style.textDecoration = "line-through";
    setText(newText.value);
    props.showAlert("Converted Into Striked", "success")
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success")
  };
  const handleOnChange = (event) => {
    // console.log("Handle On Change")
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text = "New Text" // Wrong way to update the state(text)
  // setText("New Text") // Correct way to update the state(text)
  return (
    <>
      <div className="container my-3" style={{color : props.mode === "dark" ? "white" : "black"}}>
        <h1>{props.heading}</h1>
        <p>Enter Text Below 👇</p>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            placeholder="Type or paste your content here"
            onChange={handleOnChange}
            id="myBox"
            rows="10"
            style={{backgroundColor : props.mode === "dark" ? "#bfbfbf" : "white"}}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpCllick}>
          CONVERT TO UPPERCASE
        </button>
        <button className="btn btn-success ms-2" onClick={handleLowCllick}>
          convert to lowercase
        </button>
        <button className="btn btn-secondary ms-2" onClick={handleClearCllick}>
          Clear Text
        </button>
        <button className="btn btn-dark ms-2" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-warning ms-2" onClick={handleStrikeClick}>
          <span style={styling}>Convert Into Striked</span>
        </button>
        <button className="btn btn-info ms-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{color : props.mode === "dark" ? "white" : "black"}}>
        <h2>Your Text Summary</h2>
        <p>
          <b>{text.length < 1 ? 0 : text.split(" ").length}</b> Words & <b>{text.length}</b>{" "}
          Characters
        </p>
        <p>
          <b>{text.length < 1 ? 0 : 0.008 * text.split(" ").length}</b> Minutes Read
        </p>
        <h2>Preview</h2>
        <p>{text.length < 0 ? text : "Enter Text Above To Preview It"}</p>
      </div>
    </>
  );
}
