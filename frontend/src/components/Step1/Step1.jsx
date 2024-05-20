import NextButton from "../common/NextButton";
import BackButton from "../common/BackButton";
import TextInput from "./TextInput";

export default function Step() {
  return (
    <div className="py-10 px-20 border-2 border-white">
      <h1 className="text-3xl font-bold mb-2">Personal info</h1>
      <p className="mb-4">
        Please provide your name, email address, and phone number.
      </p>

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

      <BackButton />
      <NextButton />
    </div>
  );
}
