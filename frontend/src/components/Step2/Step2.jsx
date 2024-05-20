import StepLayout from "../common/StepLayout";

export default function Step() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StepLayout
      title={"Select your plan"}
      description={"You have the option of monthly or yearly billing."}
      next={true}
      back={true}
    >
      <>
        <p>Step 2</p>
      </>
    </StepLayout>
  );
}
