import "../../index.css";

export function Selected({ options, id, placeholder, label, onChange }) {
  return (
    <>
      <div className="grid">
        <label className="block mb-2 text-sm font-medium text-sky-400">{label}</label>
        <div className="flex gap-2 rounded-xl my-3">
          <select onChange={onChange} id={id} className="border-2 border-sky-400 rounded-md w-full p-2 dark:bg-[#404040] dark:text-white">
            <option value="">{placeholder}</option>
            {options.map((option) => (
              <option key={option.id} value={option.id}>{option.name}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}