import React, {useState} from "react";


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked");
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert('Converted to Uppercase!','success')
    }
    const handleLoClick = () =>{
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert('Converted to Lowercase!','success')
    }
    const handleClearClick = () =>{
        let newtext = '';
        setText(newtext)
        props.showAlert('Text Cleared!','success')
    }
    const handleCopy = () =>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text Copied!','success')
    }
    const handleExtraSpaces = () =>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert('ExtraSpaces Cleared!','success')
    }

    const handleOnChange = (event) =>{
        console.log("On change");
        setText(event.target.value);
    }

    const [ text, setText ] = useState('');
    // text = "new text"; //wrong way to change the state 
    // setText("new text"); //correct way to change the state 
  return (
    <>
    <div className="container" style={{color : props.mode==='dark' ? 'white' : 'grey'}}>
        <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor : props.mode==='dark' ? 'grey' : 'white' , color : props.mode==='dark'?'white':'black' }}
          id="myBox"
          rows="8"
          ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color : props.mode==='dark' ? 'white' : 'grey'}}>
        <h1>Your text summary</h1>
        <p>{text.split(' ').length-1} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').length }Minutes to Read </p>
        <h2>Preview</h2>
        <p>{text.length > 0?text:"Enter In Above Textbox To Preview Here"}</p>
    </div>
          </>
  );
}
