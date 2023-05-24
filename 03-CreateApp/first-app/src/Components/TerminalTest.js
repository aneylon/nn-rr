import { useState } from "react";

const TerminalTest = () => {
  const [text, setText] = useState("this is just <br/> a test.");
  const updateText = (event) => {
    let tempValue = event.target.value.split("");

    let mapped = tempValue.map((letter) => {
      console.log(letter);
      if (letter == "\n") {
        console.log(letter);
        return "<br />";
      }
      return letter;
    });
    console.log(mapped);
    // tempValue.replace(/\n/g, "<br/>");
    // tempValue.replace(/\n/g, "RETURN");
    // console.log(tempValue.indexOf("\n"));
    console.log(mapped.join(""));
    setText(mapped.join(""));
  };
  return (
    <div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        onChange={updateText}
      ></textarea>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  );
};

export default TerminalTest;
