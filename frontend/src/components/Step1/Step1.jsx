import { useEffect, useState } from "react";
import StepLayout from "../common/StepLayout";
import TextInput from "./TextInput";

export default function Step1({
  step,
  setStep,
  personalInfo,
  setPersonalInfo,
  updateTotals
}) {
  const [isNextEnabled, setIsNextEnabled] = useState(true);

  const { name, email, phone } = personalInfo;

  return (
    <StepLayout
      title={"Personal info"}
      description={"Please provide your name, email address, and phone number."}
      next={true}
      isNextEnabled={isNextEnabled}
      step={step}
      setStep={setStep}
      updateTotals={updateTotals}
    >
      <>
        <TextInput
          type={"text"}
          id={"name"}
          label={"Name"}
          placeholder={"e.g. Stephen King"}
          {...{ personalInfo, setPersonalInfo }}
        />
        <TextInput
          type={"email"}
          id={"email"}
          label={"Email Address"}
          placeholder={"e.g. stephenking@lorem.com"}
          {...{ personalInfo, setPersonalInfo }}
        />
        <TextInput
          type={"tel"}
          id={"phone"}
          label={"Phone Number"}
          placeholder={"e.g. +1 234 567 890"}
          pattern={/\+[0-9]{1,3} [0-9]{3} [0-9]{3} [0-9]{3}/}
          {...{ personalInfo, setPersonalInfo }}
        />
      </>
    </StepLayout>
  );
}
