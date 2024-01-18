import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [score, setScore] = useState("5");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 1) {
      alert("Please provide a comment explaining why the experience was poor.");
    }
    console.log("Form submitted.");
    setComment("");
    setScore("5");
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback form</h2>
          <div className="Field">
            <h3>This is a feedback form, displaying the "score" as the slider changes. 
              If the score is 5 or less, a comment is required. 
            </h3>
            <label>Score: {score} ⭐️</label>
            <input 
            type="range" 
            min="0" 
            max="10"
            value={score}
            onChange={e => setScore(e.target.value)}
            ></input>
          </div>
          <div className="field">
            <label>Comment: </label>
            <textarea 
            value={comment}
            onChange={e => setComment(e.target.value)}/>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
      
    </div>
  );
}

export default App;
