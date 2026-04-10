import { useNotes } from "../hooks/useNotes";
import Card from "../ui/Card";

function Cards() {
  const { state, focusedNoteId } = useNotes();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 md:grid-cols-3 lg:grid-cols-4">
      {state.notes.map((note) => (
        <Card
          key={note.id}
          title={note.title}
          text={note.text}
          isFocused={focusedNoteId === note.id}
        />
      ))}
    </div>
  );
}

export default Cards;
