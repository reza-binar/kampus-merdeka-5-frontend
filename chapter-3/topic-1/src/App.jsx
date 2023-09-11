import { useState } from "react";
import "./App.css";

function App() {
  const [personOne, setPersonOne] = useState("");
  const [personTwo, setPersonTwo] = useState("");
  const [isSamePerson, setIsSamePerson] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const checkIsSamePerson = (event) => {
    event.preventDefault();

    if (!personOne || !personTwo) {
      alert("Person one or person two is not valid!");
    }

    setIsLoading(true);

    setTimeout(() => {
      if (personOne === personTwo) {
        setIsSamePerson(true);
      } else {
        setIsSamePerson(false);
      }

      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <div>
        <label htmlFor="personOne">Person One:</label>
        <input
          type="text"
          value={personOne}
          onChange={(event) => setPersonOne(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="personTwo">Person Two:</label>
        <input
          type="text"
          value={personTwo}
          onChange={(event) => setPersonTwo(event.target.value)}
        />
      </div>
      <div>
        <button type="submit" onClick={checkIsSamePerson}>
          {!isLoading ? "Check!" : "Checking..."}
        </button>
      </div>
      <div>
        <h2>
          {personOne &&
            personTwo &&
            (isSamePerson ? "The person is same!" : "Yep, different person!")}
        </h2>
      </div>
    </>
  );
}

export default App;
