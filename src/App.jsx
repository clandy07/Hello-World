import React, { useState } from "react";
import InputName from "./components/InputName.jsx";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameSubmit = (userName) => {
    setName(userName);
    setIsSubmitted(true);
  };

  return (
    <div className="body">
      {isSubmitted ? (
        <h1>Hello, {name}! hi bro</h1>
      ) : (
        <InputName onSubmit={handleNameSubmit} />
      )}
    </div>
  );
}

export default App;
