import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({ onButtonClicked }) => {
  const buttonsName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonsName.map((buttonName) => (
        <button
          key={buttonName}
          onClick={() => {
            onButtonClicked(buttonName);
          }}
          className={`${styles.button} btn btn-info`}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};
export default ButtonsContainer;
