import Button from "./Button";
import Header from "./Header";
import Profile from "./Profile";

import { useTheme } from "../context/ThemeContext";

function Container() {
  const data = useTheme();
  return (
    <div className={`app ${data.theme}`}>
      <Header />
      <hr />
      <Button />
      <Profile />
    </div>
  );
}

export default Container;
