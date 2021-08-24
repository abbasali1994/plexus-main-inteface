import './App.scss';


// Bootstrap Container
import { useState } from "react";
import { Container } from 'react-bootstrap';

// the routes
import { useRoutes } from 'hookrouter';
import { useDispatch } from 'react-redux';

import routes from './router'
import ThemeToggle from "./components/theme-toggle";
import { toggleTheme } from './redux/themeSlice';

const mq = window.matchMedia("(prefers-color-scheme: dark)");
if (!mq.matches) {
  document.body.classList.remove("light");
  document.body.classList.add("dark");
} else {
  document.body.classList.remove("dark");
  document.body.classList.add("light");
}

function App() {
  const dispatch = useDispatch();

  const routesResult = useRoutes(routes);
  const [theme, setTheme] = useState(!mq.matches ? "dark" : "light");
  const handleChange = (value) => {
    value ? setTheme("dark") : setTheme("light");
    if (value) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      dispatch(toggleTheme('dark'));
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      dispatch(toggleTheme('light'));
    }
  };
  mq.addEventListener("change", (e) => handleChange(e.matches));

  return (
    <Container fluid className={`App ${theme} p-0`}>
      <ThemeToggle  handleChange={handleChange} theme={theme}/>
      { routesResult }
    </Container>
  
  );
}
export default App;