import { useNotes } from "../hooks/useNotes";
import Button from "../ui/Button";

function Header() {
  const { addNote, setFocusedNoteId } = useNotes();

  return (
    <header className="relative flex items-center justify-center px-6 py-4 border-b border-border shrink-0">
      <h1 className="text-xl font-bold text-text-primary tracking-wide">
        Notes App
      </h1>

      <div className="absolute right-6 flex gap-2">
        <Button
          onClick={() => console.log("Clicked Archive")}
          variant="primary"
          className="px-4 py-2 text-sm bg-transparent border border-border text-text-secondary hover:text-text-primary hover:border-accent transition-all duration-200 rounded"
        >
          Archive
        </Button>
        <Button
          onClick={() => {
            const newId = addNote({
              title: "",
              text: "",
              isPinned: false,
              isArchived: false,
            });
            setFocusedNoteId(newId);
          }}
          variant="primary"
          className="px-4 py-2 text-sm bg-transparent border border-border text-text-secondary hover:text-text-primary hover:border-accent transition-all duration-200 rounded"
        >
          Add Note
        </Button>
      </div>
    </header>
  );
}

export default Header;
