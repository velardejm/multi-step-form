import SidebarStep from "./SidebarStep";

export default function Sidebar({ step, setStep }) {
  return (
    <div className="p-8 bg-[url('./assets/bg-sidebar-desktop.svg')] w-[274px] h-[568px]">
      <SidebarStep
        step={1}
        description={"YOUR INFO"}
        currentStep={step}
        setStep={setStep}
      />
      <SidebarStep
        step={2}
        description={"SELECT PLAN"}
        currentStep={step}
        setStep={setStep}
      />
      <SidebarStep
        step={3}
        description={"ADD-ONS"}
        currentStep={step}
        setStep={setStep}
      />
      <SidebarStep
        step={4}
        description={"SUMMARY"}
        currentStep={step}
        setStep={setStep}
      />
    </div>
  );
}
