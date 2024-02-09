import { ThemeToggle } from "@/components/theme-toggle";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center p-4">
      <div className="text-2xl font-bold">🐦</div>
      <ThemeToggle variant={"ghost"} />
    </header>
  );
};
