import NextButton from "./NextButton";
import BackButton from "./BackButton";
import ConfirmButton from "./ConfirmButton";
import {
  handleNext,
  handleBack,
  handleConfirm,
} from "../../utils/buttonHandlers";

export default function StepLayout({
  children,
  title,
  description,
  back,
  next,
  confirm,
  step,
  setStep,
}) {
  return (
    <div className="pt-10 px-20">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="mb-4">{description}</p>

      <div className="h-96">{children}</div>

      <div className="flex flex-row-reverse justify-between">
        {confirm && (
          <ConfirmButton handleConfirm={() => handleConfirm(step, setStep)} />
        )}
        {next && <NextButton handleNext={() => handleNext(step, setStep)} />}
        {back && <BackButton handleBack={() => handleBack(step, setStep)} />}
      </div>
    </div>
  );
}
