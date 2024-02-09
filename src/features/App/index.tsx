import Timer from "../Timer";
import { Header } from "./header";
import { ThemeProvider } from "./theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <Header />
      <div className="flex justify-center items-center h-screen">
        <Timer />
      </div>
    </ThemeProvider>
  );
}

export default App;
