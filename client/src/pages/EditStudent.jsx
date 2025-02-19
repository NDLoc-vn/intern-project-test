import { useEffect, useState } from "react";

function EditStudent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");

  const id = window.location.pathname.split("/")[2];

  useEffect(() => {
    fetch("https://localhost:7161/api/students/" + id)
      .then((res) => res.json())
      .then((data) => {
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setAddress(data.address);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = { firstName, lastName, address };

    fetch("https://localhost:7161/api/students/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => {
      console.log("student updated");
      window.location.href = "/students";
    });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <label>First Name:</label>
        <input
          type="text"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Last Name:</label>
        <input
          type="text"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label>Address:</label>
        <input
          type="text"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button>Edit</button>
      </form>
    </div>
  );
}

export default EditStudent;
