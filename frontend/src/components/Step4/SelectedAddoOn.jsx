export default function SelectedAddOn({ addOn, pricing, isMonthly }) {
  const [monthly, yearly] = pricing;
  return (
    <div className="flex justify-between">
      <p>{addOn}</p>
      <p>{isMonthly ? `+$${monthly}/mo` : `+$${yearly}/yr`}</p>
    </div>
  );
}
