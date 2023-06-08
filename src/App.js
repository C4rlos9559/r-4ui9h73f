import React from "react";
import "./style.css";

export default function App() {
  const [value, setValue] = React.useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <h1>Un repetidor</h1>
      <input
        type="text"
        placeholder="Empieza a escribir algo"
        onChange={handleChange}
      />
      <p className="repeater">{value}</p>
    </div>
  );
}
