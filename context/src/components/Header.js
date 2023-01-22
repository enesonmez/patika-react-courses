import {useTheme} from "../context/ThemeContext";

function Header() {
  const data = useTheme();
  return <div>Active theme: {data.theme}</div>;
}

export default Header;
