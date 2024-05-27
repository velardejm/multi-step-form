export default function AddOnCard({ addOns, setAddOns, addOnKey, isMonthly, addOn, description,  pricing }) {
  const [monthly, yearly] = pricing;

  const handleClick = () => {
    setAddOns((prevAddOns) => ({
      ...prevAddOns,
      [addOnKey]: !addOns[addOnKey],
    }));
  };

  return (
    <label htmlFor={addOnKey}>
      <div
        className={`flex items-center rounded-lg p-5 border border-purplishBlue ${
          addOns[addOnKey] ? "bg-magnolia" : ""
        } hover:cursor-pointer mb-4`}
      >
        <div className="relative leading-[0] mr-5 border border-purplishBlue rounded-md">
          <input
            id={addOnKey}
            type="checkbox"
            className="relative appearance-none w-5 h-5 border-0 checked:bg-purplishBlue "
            checked={addOns[addOnKey]}
            onClick={handleClick}
          />
          {addOns[addOnKey] && (
            <img
              src="/icons/icon-checkmark.svg"
              alt=""
              className="absolute top-[5px] left-[4px]"
            />
          )}
        </div>

        <div className="flex flex-1 justify-between items-center">
          <div>
            <p className="">{addOn}</p>
            <p className="text-sm">{description}</p>
          </div>
          <p className="text-sm">{isMonthly ? `$${monthly}/mo`: `$${yearly}/yr`}</p>
        </div>
      </div>
    </label>
  );
}
