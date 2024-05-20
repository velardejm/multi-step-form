export default function SidebarStep({ step, description, isActive }) {


  return (
    <div className="flex items-center mb-4">
      <div className="mr-4">
        <p className={`text-white ${true?'':'bg-lightBlue'} inline-block rounded-full border-white border-[1px] w-7 h-7 text-center`}>{step}</p>
      </div>
      <div>
        <p className="text-coolGray">{`STEP ${step}`}</p>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
}
