import ReactDOM from "react-dom";

import { Home } from "./pages/Home";
import { ThemeProvider } from "./components/ThemeProvider";

ReactDOM.render(
  <ThemeProvider>
    <Home />
  </ThemeProvider>,
  document.getElementById("root")
);
