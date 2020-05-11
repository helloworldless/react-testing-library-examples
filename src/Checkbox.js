import React from "react";
import "./styles.css";

export default function Checkbox({ initiallyChecked = false }) {
  const [checked, setChecked] = React.useState(initiallyChecked);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(prev => !prev)}
      />

      <div data-testId="message">Checked? {checked ? "yes" : "no"}</div>
    </div>
  );
}
