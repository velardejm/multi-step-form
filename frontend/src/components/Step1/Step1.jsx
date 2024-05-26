import StepLayout from "../common/StepLayout";
import TextInput from "./TextInput";

export default function Step1({ step, setStep }) {
  return (
    <StepLayout
      title={"Personal info"}
      description={"Please provide your name, email address, and phone number."}
      next={true}
      step={step}
      setStep={setStep}
    >
      <>
        <TextInput
          type={"text"}
          id={"name"}
          label={"Name"}
          placeholder={"e.g. Stephen King"}
        />
        <TextInput
          type={"email"}
          id={"email"}
          label={"Email Address"}
          placeholder={"e.g. stephenking@lorem.com"}
        />
        <TextInput
          type={"tel"}
          id={"phone"}
          label={"Phone Number"}
          placeholder={"e.g. +1 234 567 890"}
          pattern={/\+[0-9]{1,3} [0-9]{3} [0-9]{3} [0-9]{3}/}
        />
      </>
    </StepLayout>
  );
}
