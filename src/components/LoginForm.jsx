import React, { useState } from "react";
import PropTypes from "prop-types";

function LoginForm({ onSubmit }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // передаём данные наружу через props
    onSubmit({ login, password });
    // можно очистить форму или оставить
    setPassword("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8, maxWidth: 400 }}>
      <div style={{ marginBottom: 8 }}>
        <label style={{ display: "block" }}>
          Логін
          <input value={login} onChange={(e) => setLogin(e.target.value)} required style={{ width: "100%" }} />
        </label>
      </div>

      <div style={{ marginBottom: 8 }}>
        <label style={{ display: "block" }}>
          Пароль
          <div style={{ display: "flex", gap: 8 }}>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ flex: 1 }}
            />
            <button type="button" onClick={() => setShowPassword(v => !v)}>
              {showPassword ? "Сховати" : "Показати"}
            </button>
          </div>
        </label>
      </div>

      <div>
        <button type="submit">Увійти</button>
      </div>
    </form>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func
};

LoginForm.defaultProps = {
  onSubmit: () => {}
};

export default LoginForm;
