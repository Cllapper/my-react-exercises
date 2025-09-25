import React from "react";

function PersonalPage({ fullname, phone, email, city, experience, skills = [], photo }) {
  return (
    <div style={{
      display: "flex",
      gap: 16,
      border: "1px solid #ddd",
      padding: 12,
      borderRadius: 8,
      alignItems: "center"
    }}>
      <img src={photo} alt={fullname} style={{ width: 120, height: 120, borderRadius: "50%", objectFit: "cover" }} />
      <div>
        <h3>{fullname}</h3>
        <p><strong>Місто:</strong> {city}</p>
        <p><strong>Телефон:</strong> {phone}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Досвід:</strong> {experience}</p>
        <p><strong>Навички:</strong> {skills.join(", ")}</p>
      </div>
    </div>
  );
}

export default PersonalPage;
