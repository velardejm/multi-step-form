import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Step1 from "./components/Step1/Step1";
import Step2 from "./components/Step2/Step2";
import Step3 from "./components/Step3/Step3";
import Step4 from "./components/Step4/Step4";
import "./App.css";
import { getTotals } from "./utils/helperFunctions";

function App() {
  const [step, setStep] = useState(1);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [addOns, setAddOns] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });
  const [selectedPlan, setSelectedPlan] = useState("Arcade");
  const [isMonthly, setIsMonthly] = useState(true);

  const [plansData, setPlansData] = useState(null);
  const [addOnsData, setAddOnsData] = useState(null);

  const [amountTotals, setAmountTotals] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./src/data/data.json");
        const { plans, addOns } = await response.json();
        setPlansData(plans);
        setAddOnsData(addOns);
        getAddOnsTotal(addOns, addOnsData, isMonthly);
      } catch {}
    };

    fetchData();
  }, []);

  const updateTotals = () => {
    const totals = getTotals(
      selectedPlan,
      plansData,
      addOns,
      addOnsData,
      isMonthly
    );

    setAmountTotals(totals);
  };

  !plansData && null;

  return (
    <div className="bg-magnolia flex justify-center items-center min-h-screen">
      <div className="flex bg-white p-5 rounded-xl m-3">
        <Sidebar {...{ step, setStep }} />

        <div className="flex-1 min-w-96 w-[650px]">
          {step === 1 && (
            <Step1 {...{ step, setStep, personalInfo, setPersonalInfo, updateTotals }} />
          )}
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
                updateTotals
              }}
            />
          )}
          {step === 3 && (
            <Step3
              {...{ step, setStep, isMonthly, addOns, setAddOns, addOnsData, updateTotals }}
            />
          )}
          {step === 4 && (
            <Step4
              {...{
                step,
                setStep,
                selectedPlan,
                isMonthly,
                addOns,
                addOnsData,
                amountTotals,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
