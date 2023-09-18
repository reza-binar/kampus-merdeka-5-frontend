import { useState } from "react";
import { Card, Container } from "react-bootstrap";
import Comparison from "../components/Comparison";

const PeopleComparison = () => {
  const [personOne, setPersonOne] = useState("");
  const [personTwo, setPersonTwo] = useState("");
  const [isSamePerson, setIsSamePerson] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const checkIsSamePerson = () => {
    setIsLoading(true);
    setIsChecked(true);

    if (personOne === personTwo) {
      setIsSamePerson(true);
    } else {
      setIsSamePerson(false);
    }

    setIsLoading(false);
  };

  return (
    <Container>
      <Card className="mt-5">
        <Card.Body>
          <div className="d-flex flex-column justify-content-center align-items-center">
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore soluta cum voluptatem qui! Quam voluptas quo veniam at
                cum, eius repellat eaque, suscipit cupiditate consequuntur odio
                quasi, numquam reprehenderit! Ducimus.
              </p>
            </Comparison>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PeopleComparison;
