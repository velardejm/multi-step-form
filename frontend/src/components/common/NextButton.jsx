export default function NextButton({ handleNext }) {
  return (
    <button
      className="bg-marineBlue text-lightBlue p-3 rounded-md"
      onClick={handleNext}
    >
      Next Step
    </button>
  );
}
