import './App.css';
import {useState} from "react"


function App() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    console.log("Form submitted");
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>This is a controlled form with a "disabled submit button if empty" function. </h2>
          <div className="Field">
            <label htmlFor="name">Name:</label>
            <input 
            id = "name"
            type="text" 
            placeholder="Enter name here" 
            name="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
              />
          </div>
          <button disabled={!name} type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
