import React from "react";
import Restaurant from "./components/Restaurant";
import LoginForm from "./components/LoginForm";

export default function App() {
  const sampleRestaurant = {
    id: 'rest-1',
    name: "Joe's Diner",
    address: "вул. Центральна, 10, Одеса",
    rating: 4.5,
    cuisine: "Європейська",
    image: "/restaurant.jpg"
  };

  return (
    <div style={{ padding: 24, fontFamily: "Arial, sans-serif" }}>
      <h1>Модуль 5 — Функціональні компоненти (Частина 1)</h1>

      <section style={{ marginBottom: 24 }}>
        <h2>Завдання 1+2 — Інформація про ресторан (з редагуванням)</h2>
        <Restaurant initialData={sampleRestaurant} storageKey="restaurant-data" />
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2>Завдання 3 — Введення логіна та пароля</h2>
        <LoginForm onSubmit={(data) => alert(`Login: ${data.login}\nPassword: ${data.password}`)} />
      </section>
    </div>
  );
}
