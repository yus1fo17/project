import React, { useState } from "react";

const initialData = [
  {
    Caption: "ADDRESS",
    Col: "Note",  // Default olaraq "Note" gəlir
    Val: "KULALILAR Insaat Malzemeleri Ticaret ve San. Ltd. Sti.\nAkçay Caddesi No : 133/1, Gaziemir, Izmir, TURKIYE"
  },
  {
    Caption: "STREET",
    Col: "Note",  // Default olaraq "Note" gəlir
    Val: "Akçay Caddesi No : 133/1,"
  },
  {
    Caption: "ZIP_CODE",
    Col: null,  // Bu sahə boş olacaq, Select-də heç bir seçim yoxdur
    Val: "CT195SG"
  }
];

const options = ["price", "name", "discount", "address", "Note"];

export default function DynamicJsonForm() {
  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (index, newVal) => {
    const updatedData = [...formData];
    updatedData[index].Val = newVal;
    setFormData(updatedData);
  };

  const handleSelectChange = (index, newCol) => {
    const updatedData = [...formData];
    updatedData[index].Col = newCol;
    setFormData(updatedData);
  };

  const handleSubmit = () => {
    console.log("Updated JSON:", JSON.stringify(formData, null, 2));
  };

  return (
    <div style={styles.container}>
      {formData.map((item, index) => (
        <div key={index} style={styles.card}>
          <div style={styles.row}>
            {/* Caption və Col üst-üstə olacaq */}
            <div style={styles.inputWrapper}>
              <span style={styles.text}>{item.Caption}</span>
              <select
                value={item.Col || options[0]}
                onChange={(e) => handleSelectChange(index, e.target.value)}
                style={styles.select}
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div style={styles.inputWrapper}>
              <textarea
                value={item.Val}
                onChange={(e) => handleInputChange(index, e.target.value)}
                style={styles.textarea}
              />
            </div>
          </div>
        </div>
      ))}

      <div style={styles.submitContainer}>
        <button onClick={handleSubmit} style={styles.submitButton}>
          Submit
        </button>
      </div>

      <pre style={styles.jsonOutput}>
        {JSON.stringify(formData, null, 2)}
      </pre>
    </div>
  );
}

// Inline CSS as a JavaScript object
const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#f7f7f7",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  },
  card: {
    marginBottom: "16px",
    padding: "12px",
    borderRadius: "6px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    border: "1px solid #e5e5e5",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",  // Align elements to the top
    justifyContent: "space-between",
    marginBottom: "8px",
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "column",
    flex: 1, // Ensures they take up equal space
    marginRight: "8px",  // Smaller space between inputs
  },
  text: {
    fontSize: "14px",
    color: "#616161",
    marginBottom: "4px",
  },
  select: {
    padding: "6px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
    backgroundColor: "#fafafa",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
    backgroundColor: "#fafafa",
    transition: "all 0.3s ease",
    minHeight: "40px",  // Smaller height for textarea
    resize: "vertical", // Allow vertical resize of the textarea
  },
  submitContainer: {
    marginTop: "16px",
  },
  submitButton: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#3b82f6",
    color: "#fff",
    fontSize: "16px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  submitButtonHover: {
    backgroundColor: "#2563eb",
  },
  jsonOutput: {
    marginTop: "16px",
    padding: "12px",
    backgroundColor: "#f4f4f4",
    borderRadius: "6px",
    border: "1px solid #ddd",
    color: "#4a4a4a",
    fontSize: "12px",
    overflow: "auto",
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
  },
};
