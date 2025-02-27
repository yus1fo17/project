// Card.tsx (və ya Card.js) - Card komponenti
import React from "react";

export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`border rounded-lg shadow-md bg-white p-4 ${className}`}  // Card stilini təyin edirik
    >
      {children}  {/* Card içərisindəki məzmun */}
    </div>
  );
};



export const CardContent = ({ children, className = "" }) => {
  return (
    <div
      className={`text-sm ${className}`}  // CardContent üçün stil və xüsusiyyətlər
    >
      {children}  {/* CardContent içərisindəki məzmun */}
    </div>
  );
};
