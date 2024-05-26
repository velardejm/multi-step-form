export default function AddOnCard({ addOns, setAddOns, addOnKey }) {
  const handleClick = () => {
    setAddOns((prevAddOns) => ({
      ...prevAddOns,
      [addOnKey]: !addOns[addOnKey],
    }));
  };

  return (
    <label htmlFor={addOnKey}>
      <h1>Service Selected? {`${addOns[addOnKey]}`}</h1>

      <div
        className={`flex items-center rounded-lg p-5 border border-purplishBlue ${
          addOns[addOnKey] ? "bg-magnolia" : ""
        } hover:cursor-pointer`}
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
            <p className="">Online service</p>
            <p className="text-sm">Access to multiplayer games</p>
          </div>
          <p className="text-sm">+$1/mo</p>
        </div>
      </div>
    </label>
  );
}
