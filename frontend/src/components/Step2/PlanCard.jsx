export default function PlanCard({
  plan,
  icon,
  pricing,
  isMonthly,
  selectedPlan,
  setSelectedPlan,
}) {
  const [monthly, yearly] = pricing;

  const isSelected = plan.toLowerCase() === selectedPlan;

  const handleClick = () => {
    if (!isSelected) {
      setSelectedPlan(plan.toLowerCase());
    }
  };

  return (
    <div
      className={`w-[154px] border-[1.5px] border-pastelBlue rounded-lg p-5 hover:cursor-pointer ${
        isSelected ? "bg-magnolia" : ""
      } `}
      onClick={handleClick}
    >
      <img src={`/icons/${icon}`} className="mb-10" />
      <p className="text-m font-bold">{plan}</p>
      <p className="text-sm">{`$${
        isMonthly ? `${monthly}/mo` : `${yearly}/yr`
      }`}</p>
      <p className={`text-xs ${isMonthly ? "hidden" : ""}`}>2 months free</p>
    </div>
  );
}
