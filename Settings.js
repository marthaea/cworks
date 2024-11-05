// src/pages/Settings.js
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './home.css'

const Settings = () => {
  const { theme, setTheme, user, setUser } = useContext(AppContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Settings</h2>

      <section>
        <h3>Theme</h3>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </section>

      <section>
        <h3>Account Information</h3>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleUserInfoChange}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            name="role"
            value={user.role}
            onChange={handleUserInfoChange}
          />
        </label>
      </section>

      <section>
        <h3>Notification Preferences</h3>
        <label>
          <input type="checkbox" /> Email Notifications
        </label>
        <label>
          <input type="checkbox" /> In-App Notifications
        </label>
      </section>
    </div>
  );
};

export default Settings;
