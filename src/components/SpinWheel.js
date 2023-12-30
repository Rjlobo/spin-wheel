import React, { useState } from "react";

const SpinWheel = () => {
  const [rotationClass, setRotationClass] = useState("circle");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [spinCount, setSpinCount] = useState(0);

  const startRotation = () => {
    if (!buttonDisabled && spinCount < 3) {
      setRotationClass("circle start-rotate");
      setSpinCount(spinCount + 1);

      setTimeout(() => {
        setRotationClass("circle start-rotate stop-rotate");

        const randomResult = Math.random(); // Simulating the result, you can replace this with actual logic

        if (spinCount === 0 && randomResult < 0.5) {
          // If user gets reward on the first attempt, disable the button
          setButtonDisabled(true);
        } else if (spinCount === 1 && randomResult < 0.5) {
          // If user gets reward on the second attempt, disable the button
          setButtonDisabled(true);
        } else if (spinCount === 2) {
          // If user gets reward on the third attempt, disable the button
          setButtonDisabled(true);
        }
      }, Math.floor(Math.random() * 5000) + 1);
    }
  };

  return (
    <div>
      <div className="arrow"></div>

      <div className="inner-circle"></div>

      <ul className={rotationClass}>
        <li>
          <div className="text" contentEditable={true} spellCheck={false}>
            1
          </div>
        </li>
        <li>
          <div className="text" contentEditable={true} spellCheck={false}>
            2
          </div>
        </li>
        <li>
          <div className="text" contentEditable={true} spellCheck={false}>
            3
          </div>
        </li>
        <li>
          <div className="text" contentEditable={true} spellCheck={false}>
            4
          </div>
        </li>
        <li>
          <div className="text" contentEditable={true} spellCheck={false}>
            5
          </div>
        </li>
        <li>
          <div className="text" contentEditable={true} spellCheck={false}>
            6
          </div>
        </li>
      </ul>

      <button
        className="spin-button"
        onClick={startRotation}
        disabled={buttonDisabled}
      >
        SPIN
      </button>
    </div>
  );
};

export default SpinWheel;
