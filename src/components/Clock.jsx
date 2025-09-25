import React, { useEffect, useState } from "react";

function formatTime(date) {
  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

function Clock({ timezoneOffsetMinutes = null }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const display = timezoneOffsetMinutes === null
    ? formatTime(now)
    : formatTime(new Date(now.getTime() + timezoneOffsetMinutes * 60_000));

  return (
    <div style={{
      display: "inline-block",
      border: "1px solid #ddd",
      padding: 12,
      borderRadius: 8,
      fontFamily: "monospace"
    }}>
      <div>Поточний час:</div>
      <div style={{ fontSize: 24, marginTop: 6 }}>{display}</div>
    </div>
  );
}

export default Clock;
