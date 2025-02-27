import { useState } from "react";

export function Select({ onValueChange, children }) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    onValueChange(value);
  };

  return (
    <select
      value={selectedValue}
      onChange={handleChange}
      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {children}
    </select>
  );
}

export function SelectTrigger({ children }) {
  return <>{children}</>;
}

export function SelectValue({ placeholder }) {
  return <option disabled>{placeholder}</option>;
}

export function SelectContent({ children }) {
  return <>{children}</>;
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}
