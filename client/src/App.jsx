import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [hello, setHello] = useState("");
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7161/api/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  const fetchHello = () => {
    fetch("https://localhost:7161/api/hello")
      .then((res) => res.text())
      .then((data) => setHello(data + " x" + count));

    setCount(count + 1);
  };

  return (
    <>
      <button onClick={fetchHello}>Click to say Hello!</button>
      <h1>{hello}</h1>
      <hr />
      <h2>All Students:</h2>
      <ul>
        {students.map((student) => (
          <li
            key={student.id}
            style={{ listStyleType: "none", textAlign: "left" }}
          >
            {student.lastName + student.firstName} - {student.address}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
