import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Step1 from "./components/Step1/Step1";
import Step2 from "./components/Step2/Step2";
import Step3 from "./components/Step3/Step3";
import Step4 from "./components/Step4/Step4";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState("arcade");
  const [addOns, setAddOns] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });
  const [plansData, setPlansData] = useState(null);
  const [addOnsData, setAddOnsData] = useState(null);

  const addOnPricing = {
    onlineService: [1, 10],
    largerStorage: [2, 20],
    customizableProfile: [2, 20],
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./src/data/data.json");
        const { plans, addOns } = await response.json();
        setPlansData(plans);
        setAddOnsData(addOns);
      } catch {}
    };

    fetchData();
  }, []);

  !plansData && null;

  return (
    <div className="bg-magnolia flex justify-center items-center min-h-screen">
      <div className="flex bg-white p-5 rounded-xl m-3">
        <Sidebar step={step} />

        <div className="flex-1 min-w-96 w-[650px]">
          {step === 1 && <Step1 {...{ step, setStep }} />}
          {step === 2 && (
            <Step2
              {...{
                step,
                setStep,
                isMonthly,
                setIsMonthly,
                selectedPlan,
                setSelectedPlan,
                plansData,
              }}
            />
          )}
          {step === 3 && (
            <Step3
              {...{ step, setStep, isMonthly, addOns, setAddOns, addOnPricing, addOnsData }}
            />
          )}
          {step === 4 && (
            <Step4 {...{ step, setStep, selectedPlan, isMonthly }} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
