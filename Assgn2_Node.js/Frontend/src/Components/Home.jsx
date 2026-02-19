import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  const fetchData = async (type) => {
    const res = await fetch("http://localhost:5000/");
    const data = await res.json();

    if (type === "free")
      setText("Free Memory: " + data.freeMemory);
    if (type === "total")
      setText("Total Memory: " + data.totalMemory);
    if (type === "arch")
      setText("CPU Architecture: " + data.architecture);
    if (type === "user")
      setText("User Info: " + JSON.stringify(data.userInfo));
  };

  return (
    <>
      <h1>Work with OS</h1>
      <span>{text}</span>
      <br /><br />
      <button onClick={() => fetchData("free")}>FREE MEMORY</button>
      <button onClick={() => fetchData("total")}>TOTAL MEMORY</button>
      <button onClick={() => fetchData("arch")}>CPU ARCHITECTURE</button>
      <button onClick={() => fetchData("user")}>USER INFO</button>
    </>
  );
}