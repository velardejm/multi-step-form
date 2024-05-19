import NextButton from "../common/NextButton";
import BackButton from "../common/BackButton";

export default function Step() {
  return (
    <div>
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="e.g. Stephen King"
      />
      <label for="name">Email Address</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="e.g. stephenking@lorem.com"
      />
      <label for="phone">Phone Number:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        pattern="\+[0-9]{1,3} [0-9]{3} [0-9]{3} [0-9]{3}"
        placeholder="e.g. +1 234 567 890"
        required
      />
      
      <BackButton />
      <NextButton />
    </div>
  );
}
