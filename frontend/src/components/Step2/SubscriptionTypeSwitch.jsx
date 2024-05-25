export default function SubscriptionTypeSwitch({ isMonthly, setIsMonthly }) {
  return (
    <form className="flex justify-center items-center bg-alabaster py-3 rounded-md">
      <label htmlFor="yearly">Monthly</label>
      <div
        className="flex justify-between items-center bg-marineBlue px-[3px] rounded-full w-9 h-5 hover:cursor-pointer mx-10"
        onClick={() => {
          setIsMonthly(!isMonthly);
        }}
      >
        <input
          type="radio"
          name="subscription"
          id="monthly"
          value="monthly"
          className={`appearance-none w-3 h-3 rounded-full ${
            isMonthly ? "bg-white" : ""
          } hover:cursor-pointer`}
          defaultChecked={isMonthly ? true : false}
        />

        <input
          type="radio"
          name="subscription"
          id="yearly"
          value="yearly"
          className={`appearance-none w-3 h-3 rounded-full ${
            !isMonthly ? "bg-white" : ""
          } hover:cursor-pointer`}
          defaultChecked={!isMonthly ? true : false}
        />
      </div>
      <label htmlFor="monthly">Yearly</label>
    </form>
  );
}
