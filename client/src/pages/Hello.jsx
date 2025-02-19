import { useState } from "react";
import Navbar from "../components/Navbar";

function Hello() {
  const [count, setCount] = useState(0);
  const [hello, setHello] = useState("");

  const fetchHello = () => {
    fetch("https://localhost:7161/api/hello")
      .then((res) => res.text())
      .then((data) => setHello(data + " x" + count));

    setCount(count + 1);
  };

  return (
    <>
      <Navbar />
      <hr />
      <div style={{ textAlign: "center" }}>
        <button onClick={fetchHello}>Click to say Hello!</button>
        <h1>{hello}</h1>
      </div>
    </>
  );
}

export default Hello;
