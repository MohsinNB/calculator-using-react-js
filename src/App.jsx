import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  let [calValue, setCalValue] = useState("");
  const onButtonClicked = (buttonText) => {
    if (buttonText === "C") {
      const newDisplay = "";
      setCalValue(newDisplay);
    } else if (buttonText === "=") {
      const result = eval(calValue);
      setCalValue(result);
    } else {
      const newDisplayValue = calValue + buttonText;
      setCalValue(newDisplayValue);
      // console.log("another button clicked");
    }
  };

  return (
    <center>
      <div className={styles.calculator}>
        <Display displayValue={calValue}></Display>
        <ButtonsContainer onButtonClicked={onButtonClicked}></ButtonsContainer>
      </div>
    </center>
  );
}

export default App;
