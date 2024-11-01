import "../../index.css";

export function AuthInput({ name, placeholder, type, className, label, value, onChange }) {
  return (

    <div className="grid">
      <label className="text-sky-500">{label}</label>
      <div className={`flex gap-2 rounded-xl my-3 ${className}`}>
        <input
          className="w-full text-base shadow-md p-3 rounded-xl border-none focus:outline-none focus:ring-0"
          name={name}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
