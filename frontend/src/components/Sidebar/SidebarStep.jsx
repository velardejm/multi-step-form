export default function SidebarStep({ step, description }) {
  return (
    <div>
      <div>
        <p className="text-white">{step}</p>
      </div>
      <div>
        <p className="text-coolGray">{`STEP ${step}`}</p>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
}
