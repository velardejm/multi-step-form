export default function ConfirmButton({ handleConfirm }) {
  return (
    <button
      className="bg-purplishBlue text-lightGray p-3 rounded-md"
      onClick={handleConfirm}
    >
      Confirm
    </button>
  );
}
