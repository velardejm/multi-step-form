export default function PlanCard({ isMonthly }) {
  return (
    <div className="w-10">
      <img></img>
      <p>Arcade</p>
      <p>$90/yr</p>
      <p className={`${isMonthly ? "hidden" : ""}`}>2 months free</p>
    </div>
  );
}
