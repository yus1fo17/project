export function Input({ value, onChange }) {
    return (
      <textarea
        type="text"
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    );
  }
  