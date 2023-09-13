import PropTypes from "prop-types";
import { useEffect } from "react";

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
      {/* <div>
        <button type="submit" onClick={checkIsSamePerson}>
          {!isLoading ? "Check!" : "Checking..."}
        </button>
      </div> */}
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
