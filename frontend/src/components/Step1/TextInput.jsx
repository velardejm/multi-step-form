export default function TextInput({ type, id, label, placeholder, ...props }) {
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
      />
    </div>
  );
}
