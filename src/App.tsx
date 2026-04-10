import { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import "./styles.css";

export default function App() {
  const [currentFilter, setCurrentFilter] = useState<string>("all");

  return (
    <div className="flex h-screen w-full text-text-primary bg-background overflow-hidden">
      <Sidebar
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />
      <div className="flex flex-col flex-1 min-w-0">
        <Header setCurrentFilter={setCurrentFilter} />
        <MainContent currentFilter={currentFilter} />
      </div>
    </div>
  );
}
