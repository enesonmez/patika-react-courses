import {useTheme} from "../context/ThemeContext";

function Button() {
  const data = useTheme();

  return (
    <div>
      Active theme: {data.theme}
      <br />
      <button
        onClick={() => data.setTheme(data.theme === "light" ? "dark" : "light")}
      >
        Change Theme
      </button>
    </div>
  );
}

export default Button;
