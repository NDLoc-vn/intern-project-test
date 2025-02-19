import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentsTable";

function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://localhost:7161/api/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
    setLoading(false);
  }, []);
  return (
    <>
      <Navbar />
      <hr />
      <StudentForm setStudents={setStudents} />
      <StudentTable
        students={students}
        loading={loading}
        setStudents={setStudents}
      />
    </>
  );
}

export default Students;
