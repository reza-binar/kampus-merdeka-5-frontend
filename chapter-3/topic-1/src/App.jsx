import { useState } from "react";
import "./App.css";
import Comparison from "./components/Comparison";

function App() {
  const [personOne, setPersonOne] = useState("");
  const [personTwo, setPersonTwo] = useState("");
  const [isSamePerson, setIsSamePerson] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const checkIsSamePerson = () => {
    // event.preventDefault()

    // if (!personOne || !personTwo) {
    //   alert("Person one or person two is not valid!");
    // }

    setIsLoading(true);
    setIsChecked(true);

    // setTimeout(() => {
    if (personOne === personTwo) {
      setIsSamePerson(true);
    } else {
      setIsSamePerson(false);
    }

    setIsLoading(false);
    // }, 1000);
  };

  return (
    <>
      <Comparison
        personOne={personOne}
        personTwo={personTwo}
        isChecked={isChecked}
        isSamePerson={isSamePerson}
        isLoading={isLoading}
        checkIsSamePerson={checkIsSamePerson}
        setPersonOne={setPersonOne}
        setPersonTwo={setPersonTwo}
        setIsChecked={setIsChecked}
      >
        <h1>Lorem ipsum dolor</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          soluta cum voluptatem qui! Quam voluptas quo veniam at cum, eius
          repellat eaque, suscipit cupiditate consequuntur odio quasi, numquam
          reprehenderit! Ducimus.
        </p>
      </Comparison>
    </>
  );
}

export default App;
