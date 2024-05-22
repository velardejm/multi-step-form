import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import StepLayout from "./components/common/StepLayout";
import Step1 from "./components/Step1/Step1";
import Step2 from "./components/Step2/Step2";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg"; Note: This automatically points to public folder
import "./App.css";

function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="bg-magnolia flex justify-center items-center min-h-screen">
      <div className="flex bg-white p-5 rounded-xl m-3">
        <Sidebar step={step} />

        <div className="flex-1 min-w-96 w-[650px]">
          {step === 1 && <Step1 step={step} setStep={setStep} />}
          {step === 2 && <Step2 step={step} setStep={setStep} />}
        </div>
      </div>
    </div>
  );
}

export default App;
