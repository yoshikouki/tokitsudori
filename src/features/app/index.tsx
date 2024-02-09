import Timer from "../timer";
import UserCount from "../user-count";
import { Header } from "./header";
import { ThemeProvider } from "./theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <div className="flex flex-col justify-center items-center h-screen">
        <Timer />
        <UserCount />
      </div>
    </ThemeProvider>
  );
}

export default App;
