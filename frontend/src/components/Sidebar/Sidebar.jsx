import SidebarStep from "./SidebarStep";

export default function Sidebar({ step }) {
  // const [step, setStep] = useState(1);

  return (
    <div className="p-8 bg-[url('./assets/bg-sidebar-desktop.svg')] w-[274px] h-[568px]">
      <SidebarStep step={1} description={"YOUR INFO"} currentStep={step} />
      <SidebarStep step={2} description={"SELECT PLAN"} currentStep={step} />
      <SidebarStep step={3} description={"ADD-ONS"} currentStep={step} />
      <SidebarStep step={4} description={"SUMMARY"} currentStep={step} />
    </div>
  );
}
