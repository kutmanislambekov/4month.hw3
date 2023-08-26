import React, { useState } from "react";

const Form = ({ data, setData }) => {
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim() !== "") {
      setData([
        {
          id: Math.random(),
          text: text.trim(),
          completed: false,
          deleted: false,
          important: false,
          correct: false,
        },
        ...data,
      ]);
      setText("");
    }
  };

  return (
    <div className="form">
        <h1>Just Do It.</h1>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
      />
      <button onClick={addTodo}>I Got This</button>
      <p className="pp">11/17/2020,7:31:49 pm</p>
    </div>
  );
};

export default Form;