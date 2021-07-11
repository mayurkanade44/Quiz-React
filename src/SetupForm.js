import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { error, quiz, handleChange, handleSubmit } = useGlobalContext();

  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-from">
          { localStorage.getItem("score") ? (
          <h4 className="last-score">
            Your last score was <span style={{color:"red"}}>{localStorage.getItem("score")}</span> in{" "}
            {localStorage.getItem("category")}
          </h4>):null}
          <h2>Setup Quiz</h2>
          {/* {amount} */}
          <div className="form-control">
            <label htmlFor="amount">Number Of Question</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={handleChange}
              className="form-input"
              min={1}
              max={50}
            />
          </div>
          <div className="form-control">
            <label htmlFor="category">Select Category</label>
            <select
              name="category"
              id="category"
              value={quiz.category}
              onChange={handleChange}
              className="form-input"
            >
              <option value="sports">Sports</option>
              <option value="history">History</option>
              <option value="politics">Politics</option>
              <option value="geography">Geography</option>
              <option value="art">Art</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="difficulty">Select Difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              value={quiz.difficulty}
              onChange={handleChange}
              className="form-input"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          {error && (
            <p className="error">
              cant genrate questions please try different options
            </p>
          )}
          <button type="submit" onClick={handleSubmit} className="submit-btn">
            Start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
