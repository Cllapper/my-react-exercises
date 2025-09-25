import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Restaurant({ initialData, storageKey }) {
  // Попробуем загрузить из localStorage, иначе используем initialData
  const [data, setData] = useState(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? JSON.parse(raw) : initialData;
    } catch (e) {
      return initialData;
    }
  });

  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(data);

  useEffect(() => {
    // при смене data — обновляем форму
    setForm(data);
  }, [data]);

  useEffect(() => {
    // сохраняем при изменении data
    try {
      localStorage.setItem(storageKey, JSON.stringify(data));
    } catch (e) {
      console.warn("localStorage error:", e);
    }
  }, [data, storageKey]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: name === "rating" ? parseFloat(value) || 0 : value }));
  }

  function startEdit() {
    setEditing(true);
  }

  function cancelEdit() {
    setForm(data);
    setEditing(false);
  }

  function saveEdit(e) {
    e.preventDefault();
    setData(form);
    setEditing(false);
  }

  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8, maxWidth: 800 }}>
      {!editing ? (
        <>
          <div style={{ display: "flex", gap: 12 }}>
            {data.image && (
              <img src={data.image} alt={data.name} style={{ width: 200, height: "auto", borderRadius: 6 }} />
            )}
            <div>
              <h3 style={{ marginTop: 0 }}>{data.name}</h3>
              <p><strong>Адреса:</strong> {data.address}</p>
              <p><strong>Рейтинг:</strong> {data.rating}</p>
              <p><strong>Тип кухні:</strong> {data.cuisine}</p>
            </div>
          </div>
          <div style={{ marginTop: 12 }}>
            <button onClick={startEdit} style={{ marginRight: 8 }}>Редагувати</button>
            <button onClick={() => { localStorage.removeItem(storageKey); setData(initialData); }}>Скинути</button>
          </div>
        </>
      ) : (
        <form onSubmit={saveEdit} style={{ display: "grid", gap: 8 }}>
          <label>
            Назва
            <input name="name" value={form.name} onChange={handleChange} />
          </label>
          <label>
            Адреса
            <input name="address" value={form.address} onChange={handleChange} />
          </label>
          <label>
            Рейтинг
            <input name="rating" type="number" step="0.1" min="0" max="5" value={form.rating} onChange={handleChange} />
          </label>
          <label>
            Тип кухні
            <input name="cuisine" value={form.cuisine} onChange={handleChange} />
          </label>
          <label>
            URL зображення
            <input name="image" value={form.image} onChange={handleChange} />
          </label>

          <div style={{ marginTop: 8 }}>
            <button type="submit" style={{ marginRight: 8 }}>Зберегти</button>
            <button type="button" onClick={cancelEdit}>Скасувати</button>
          </div>
        </form>
      )}
    </div>
  );
}

Restaurant.propTypes = {
  initialData: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    address: PropTypes.string,
    rating: PropTypes.number,
    cuisine: PropTypes.string,
    image: PropTypes.string
  }).isRequired,
  storageKey: PropTypes.string // ключ для localStorage
};

Restaurant.defaultProps = {
  storageKey: "restaurant-data"
};

export default Restaurant;
