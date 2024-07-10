import React from "react";
import "./style.css";

function App() {
  const [disabled, setDisabled] = React.useState(false);
  const [buttonColor, setButtonColor] = React.useState('medium-violet-red');
  const nextColor = buttonColor === "medium-violet-red" ? "midnight-blue" : "medium-violet-red";
  return (
    <div>
      <button 
      className={buttonColor} 
      onClick={() => setButtonColor(nextColor)}
      disabled={disabled}
      >
        Change to {nextColor}
        </button>
        <br />
        <input 
        type="checkbox" 
        id="disabled-button-checkbox" 
        defaultChecked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
        >
        </input>
        <label htmlFor="disabled-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
