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
    navigator.clipboard.writeText(text);
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
        <h1 className="mb-3">{props.heading}</h1>
        <p>Enter Text Below 👇</p>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            placeholder="Type or paste your content here"
            onChange={handleOnChange}
            id="myBox"
            rows="10"
            style={{backgroundColor : props.mode === "dark" ? "#13466e" : "white",
          color: props.mode === 'dark' ? 'white' : '#042743'}}
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary my-1" onClick={handleUpCllick}>
          CONVERT TO UPPERCASE
        </button>
        <button disabled={text.length === 0} className="btn btn-success ms-2 my-1" onClick={handleLowCllick}>
          convert to lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-secondary ms-2 my-1" onClick={handleClearCllick}>
          Clear Text
        </button>
        <button disabled={text.length === 0} className="btn btn-dark ms-2 my-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button disabled={text.length === 0} className="btn btn-warning ms-2 my-1" onClick={handleStrikeClick}>
          <span style={styling}>Convert Into Striked</span>
        </button>
        <button disabled={text.length === 0} className="btn btn-info ms-2 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{color : props.mode === "dark" ? "white" : "black"}}>
        <h2>Your Text Summary</h2>
        <p>
          <b>{text.split(/\s+/).filter((element) => {
            return (element.length !== 0)
          }).length}</b> Words & <b>{text.length}</b>{" "}
          Characters
        </p>
        <p>
          <b>{text.length < 1 ? 0 : 0.008 * text.split(" ").length}</b> Minutes Read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing To Preview"}</p>
      </div>
    </>
  );
}
