export default function SidebarStep({
  step,
  description,
  currentStep,
  setStep,
}) {
  return (
    <div className="flex items-center mb-4">
      <div className="mr-4">
        <p
          className={`inline-block rounded-full border-[1px] w-7 h-7 text-center ${
            currentStep === step ? "step-current" : "step-default"
          }`}
        >
          {step}
        </p>
      </div>
      <div>
        <p className="text-coolGray">{`STEP ${step}`}</p>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
}
