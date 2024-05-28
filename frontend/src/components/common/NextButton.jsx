export default function NextButton({
  handleNext,
  isNextEnabled,
  step,
  updateTotals,
}) {
  return (
    <button
      className={`p-3 rounded-md bg-marineBlue text-lightBlue ${
        step === 1 ? (isNextEnabled ? "" : "bg-gray-500 text-gray-100") : ""
      } `}
      onClick={() => {
        handleNext();
        updateTotals();
      }}
      disabled={step === 1 ? !isNextEnabled : false}
    >
      Next Step
    </button>
  );
}
