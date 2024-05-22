import StepLayout from "../common/StepLayout";
import { handleNext, handleBack } from "../../utils/buttonHandlers";

export default function Step2({ step, setStep }) {
  return (
    <StepLayout
      title={"Select your plan"}
      description={"You have the option of monthly or yearly billing."}
      next={true}
      back={true}
      handleNext={() => handleNext(step, setStep)}
      handleBack={() => handleBack(step, setStep)}
    >
      <>
        <p>Step 2</p>
      </>
    </StepLayout>
  );
}
