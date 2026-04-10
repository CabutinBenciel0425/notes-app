import { useNotes } from "../hooks/useNotes";
import { PiNotePencil } from "react-icons/pi";
import Button from "../ui/Button";

function Header({
  setCurrentFilter,
}: {
  setCurrentFilter: (filter: string) => void;
}) {
  const { addNote, setFocusedNoteId } = useNotes();

  return (
    <header className="relative flex items-center justify-center px-6 py-4 border-b border-border shrink-0 top-0 z-10 bg-background">
      <h1 className="text-xl font-bold text-text-primary tracking-wide">
        Notes App
      </h1>

      <div className="absolute right-6 flex gap-2">
        <Button
          onClick={() => {
            const newId = addNote({
              title: "",
              text: "",
              isPinned: false,
              isArchived: false,
            });
            setFocusedNoteId(newId);
            setCurrentFilter("all");
          }}
          variant="primary"
          className="px-4 py-2 text-sm bg-transparent border border-border text-text-secondary hover:text-text-primary hover:border-accent transition-all duration-200 rounded flex flex-row gap-2"
        >
          <span className="text-2xl">
            <PiNotePencil />
          </span>
          Add Note
        </Button>
      </div>
    </header>
  );
}

export default Header;
