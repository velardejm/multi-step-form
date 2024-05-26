export default function PlanCard({ isMonthly, plan, icon, pricing }) {
  const [monthly, yearly] = pricing;

  return (
    <div className="w-[154px] border-[1.5px] border-pastelBlue rounded-lg p-5">
      <img src={`/icons/${icon}`} className="mb-10" />
      <p className="text-m font-bold">{plan}</p>
      <p className="text-sm">{`$${isMonthly ? `${monthly}/mo` : `${yearly}/yr`}`}</p>
      <p className={`text-xs ${isMonthly ? "hidden" : ""}`}>2 months free</p>
    </div>
  );
}
