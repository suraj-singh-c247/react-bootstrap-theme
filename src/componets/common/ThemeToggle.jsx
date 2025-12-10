import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { setTheme } from "../../utils/theme";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme on initial render
  useEffect(() => {
    const saved = localStorage.getItem("app-theme");
    const isDark = saved === "dark";

    setDarkMode(isDark);
    setTheme(isDark ? "dark" : "light");
  }, []);

  const handleToggle = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    setTheme(newTheme);
  };

  return (
    <Form>
      <Form.Check
        type="switch"
        id="theme-switch"
        label={darkMode ? "Dark Mode" : "Light Mode"}
        checked={darkMode}
        onChange={handleToggle}
      />
    </Form>
  );
}
