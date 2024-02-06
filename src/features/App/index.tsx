import { ThemeToggle } from "../../components/theme-toggle";
import Timer from "../Timer";
import { ThemeProvider } from "./theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <h1>Tokitsudori</h1>
      <ThemeToggle />
      <Timer />
    </ThemeProvider>
  );
}

export default App;
