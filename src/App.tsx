import NotesProvider from "./context/NotesProvider";
import "./styles.css";

export default function App() {
  return (
    <NotesProvider>
      <div>
        <h1 className="text-2xl underline">Notes App</h1>
      </div>
    </NotesProvider>
  );
}
