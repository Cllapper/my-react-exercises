import React from "react";

function Pet({ name, type, age, breed, photo }) {
  return (
    <div style={{
      display: "flex",
      gap: 12,
      alignItems: "center",
      border: "1px solid #ddd",
      padding: 12,
      borderRadius: 8
    }}>
      {photo && <img src={photo} alt={name} style={{ width: 120, height: 120, objectFit: "cover", borderRadius: 8 }} />}
      <div>
        <h3>{name} — {type}</h3>
        <p><strong>Вік:</strong> {age}</p>
        <p><strong>Порода:</strong> {breed}</p>
      </div>
    </div>
  );
}

export default Pet;
