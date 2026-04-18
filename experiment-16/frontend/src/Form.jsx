import { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  return (
    <>
      <input
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name}</p>
    </>
  );
}

export default Form;