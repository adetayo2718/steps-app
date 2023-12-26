import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />;
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    step > 1 && setStep((s) => s - 1);
  }

  function handleNext() {
    step < 3 && setStep((s) => s + 1);
  }
  return (
    <div>
      <Button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </Button>
      {isOpen ? (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? " active" : ""}>1</div>
            <div className={step >= 2 ? " active" : ""}>2</div>
            <div className={step >= 3 ? " active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" color="#fff" onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>
            <Button bgColor="#7950f2" color="#fff" onClick={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      ) : (
        "Sorry, we'll be right back... (:"
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3> Step {step}</h3>
      <span>{children}</span>
    </div>
  );
}

function Button({ bgColor, color, onClick, className, children }) {
  return (
    <button
      className={className}
      style={{ backgroundColor: bgColor, color: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
