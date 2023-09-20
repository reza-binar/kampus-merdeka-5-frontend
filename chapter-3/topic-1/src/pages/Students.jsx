import { Container, Row, Col } from "react-bootstrap";
import students from "../data/students.json";
import Student from "../components/Student";
import { useEffect, useState } from "react";

const Students = () => {
  const [studentsData, setStudentsData] = useState(students);

  useEffect(() => {
    setTimeout(() => {
      setStudentsData((student) => [
        ...student,
        { id: 5, class: "FEJS", name: "Nelan" },
      ]);
    }, 5000);
  }, []);

  return (
    <Container className="mt-4">
      <Row className="g-4">
        {studentsData.map((student) => (
          <Col key={student.id} md={3}>
            <Student name={student.name} className={student.class} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Students;
