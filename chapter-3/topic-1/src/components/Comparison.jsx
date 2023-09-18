import PropTypes from "prop-types";
import { useEffect } from "react";
import { Form, InputGroup } from "react-bootstrap";

function Comparison({
  personOne,
  personTwo,
  isSamePerson,
  //   isLoading,
  isChecked,
  setPersonOne,
  setPersonTwo,
  checkIsSamePerson,
  setIsChecked,
  children,
}) {
  useEffect(() => {
    console.log("Hello World!");
  }, []);

  useEffect(() => {
    if (personOne && personTwo) {
      setIsChecked(true);
      checkIsSamePerson();
    } else {
      setIsChecked(false);
    }
  }, [personOne, personTwo, checkIsSamePerson, setIsChecked]);

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="person-one">Person One</InputGroup.Text>
        <Form.Control
          placeholder="Person One"
          aria-label="Person One"
          aria-describedby="person-one"
          value={personOne}
          onChange={(event) => setPersonOne(event.target.value)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="person-two">Person Two</InputGroup.Text>
        <Form.Control
          placeholder="Person Two"
          aria-label="Person Two"
          aria-describedby="person-two"
          value={personTwo}
          onChange={(event) => setPersonTwo(event.target.value)}
        />
      </InputGroup>

      <div>
        <h2>
          {isChecked &&
            (isSamePerson ? "The person is same!" : "Yep, different person!")}
        </h2>
      </div>

      {children}
    </>
  );
}

Comparison.propTypes = {
  personOne: PropTypes.string,
  personTwo: PropTypes.string,
  isSamePerson: PropTypes.bool,
  isLoading: PropTypes.bool,
  isChecked: PropTypes.bool,
  setPersonOne: PropTypes.func,
  setPersonTwo: PropTypes.func,
  checkIsSamePerson: PropTypes.func,
  children: PropTypes.node,
  setIsChecked: PropTypes.func,
};

export default Comparison;
