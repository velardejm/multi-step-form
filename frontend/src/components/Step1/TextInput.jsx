export default function TextInput({
  type,
  id,
  label,
  placeholder,
  personalInfo,
  setPersonalInfo,
  ...props
}) {
  const handleChange = (e) => {
    setPersonalInfo((prev) => {
      return {
        ...prev,
        [id]: e.target.value,
      };
    });
  };

  return (
    <div className="mb-5">
      <label className="block mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        className="border-gray border-[1px] rounded-md p-3 w-full"
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        required
        {...props}
        onChange={handleChange}
        value={personalInfo[id]}
      />
    </div>
  );
}
