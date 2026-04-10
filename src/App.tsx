import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import "./styles.css";

export default function App() {
  return (
    <div className="flex min-h-screen w-full text-text-primary bg-background overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}
