import { useNotes } from "./hooks/useNotes";
import "./styles.css";

export default function App() {
  const { state } = useNotes();

  console.log(state);
  return (
    <div>
      <h1 className="text-2xl underline">Notes App</h1>
    </div>
  );
}
