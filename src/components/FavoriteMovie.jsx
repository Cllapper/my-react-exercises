import React from "react";

function FavoriteMovie({ title, director, year, studio, poster, description }) {
  return (
    <div style={{
      display: "flex",
      gap: 16,
      alignItems: "flex-start",
      border: "1px solid #ddd",
      padding: 12,
      borderRadius: 8
    }}>
      <img src={poster} alt={`${title} poster`} style={{ width: 150, height: "auto", borderRadius: 6 }} />
      <div>
        <h3>{title} ({year})</h3>
        <p><strong>Режисер:</strong> {director}</p>
        <p><strong>Кіностудія:</strong> {studio}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default FavoriteMovie;
