import React from "react";
import FavoriteMovie from "./components/FavoriteMovie";
import PersonalPage from "./components/PersonalPage";
import Clock from "./components/Clock";
import Pet from "./components/Pet";

export default function App() {
  const movie = {
    title: "Назва фільму",
    director: "Ім'я Прізвище",
    year: 2021,
    studio: "Кіностудія",
    poster: "/poster.jpg",
    description: "Короткий опис фільму..."
  };

  const me = {
    fullname: "Богдан Прізвище",
    phone: "+380501234567",
    email: "bogdan@example.com",
    city: "Одеса",
    experience: "1 рік стажування, 2 роки індивідуальних проєктів",
    skills: ["JavaScript", "React", "Python"],
    photo: "/avatar.jpg"
  };

  const pet = {
    name: "Мурчик",
    type: "Кішка",
    age: "3 роки",
    breed: "Європейська короткошерста",
    photo: "/pet.jpg"
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>Практичні завдання — Модуль 5 (Функціональні компоненти)</h1>

      <section style={{ marginBottom: 30 }}>
        <h2>Завдання 1 — Улюблений фільм</h2>
        <FavoriteMovie {...movie} />
      </section>

      <section style={{ marginBottom: 30 }}>
        <h2>Завдання 2 — Персональна сторінка</h2>
        <PersonalPage {...me} />
      </section>

      <section style={{ marginBottom: 30 }}>
        <h2>Завдання 3 — Поточний час</h2>
        <Clock />
      </section>

      <section style={{ marginBottom: 30 }}>
        <h2>Завдання 4 — Домашній улюбленець</h2>
        <Pet {...pet} />
      </section>
    </div>
  );
}
