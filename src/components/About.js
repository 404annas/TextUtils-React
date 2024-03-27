import React from "react";

export default function About(props) {
  // const [myStyles, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  let myStyles = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white'
  }

  return (
    <div className="container mt-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyles}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={myStyles}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyles}>
              TextUtils gives you away to analyze your text quickly and efficiently. Be it word count, character count or styling your text.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={myStyles}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyles}>
              TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. That it is suitable for writing text with word / character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={myStyles}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyles}>
              This word counter software works in any web browser such as Chrome, Firefox, Safari, Internet Explorer, Opera, Microsoft Edge. It suits to count characters in facebook, blog, book, excel document, pdf document, essays, etc...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
