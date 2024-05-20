export default function TextInput({ type, id, label, placeholder, ...props }) {
  return (
    <div className="mb-5">
      <label className="block" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        // pattern={props.pattern? props.pattern : null}
        {...props}
      />
    </div>
  );
}
