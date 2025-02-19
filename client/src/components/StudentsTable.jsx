// import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function StudentTable({ students, loading, setStudents }) {
  const deleteStudent = (id) => {
    fetch("https://localhost:7161/api/students/" + id, { method: "DELETE" });

    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div>
      <h1>All Students:</h1>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <p>Loading...</p>
            ) : (
              students.map((student) => (
                <tr key={student.id}>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.address}</td>
                  <td>
                    <NavLink to={"/edit/" + student.id}>Edit</NavLink>
                  </td>
                  <td>
                    <button onClick={() => deleteStudent(student.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentTable;
