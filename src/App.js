import React, { useState } from "react";
import Question from "./Question";
import data from "./data";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="container">
      <h3>کدوم از اینارو انتخاب میکنی؟</h3>
      <div className="info">
        {questions.map((question) => (
          <Question {...question} />
        ))}
      </div>
    </div>
  );
}

export default App;
