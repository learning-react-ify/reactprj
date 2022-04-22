import { ThemeContext } from "./App";
import { useContext } from "react";

const colors = ["orange", "red", "green", "purple", "cyan", "magenta"];

export default function ThemeComp() {
  const { theme, setTheme } = useContext(ThemeContext);
  const pickColor = () => {
    const index = Math.floor(Math.random() * colors.length);
    setTheme(colors[index]);
  };
  return (
    <div
      style={{
        backgroundColor: theme,
        color: "white",
      }}
    >
      Theme
      <button onClick={pickColor}>Change Theme</button>
    </div>
  );
}
