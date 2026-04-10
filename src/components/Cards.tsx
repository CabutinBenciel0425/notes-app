import { useNotes } from "../hooks/useNotes";
import Card from "../ui/Card";

function Cards({ currentFilter }: { currentFilter: string }) {
  const { focusedNoteId, untitledNotes, pinnedNotes, archivedNotes, allNotes } =
    useNotes();
  console.log(currentFilter);

  let renderNotes = allNotes;

  if (currentFilter === "all") {
    renderNotes = [...pinnedNotes, ...allNotes];
  } else if (currentFilter === "untitled") {
    renderNotes = untitledNotes;
  } else if (currentFilter === "pinned") {
    renderNotes = pinnedNotes;
  } else if (currentFilter === "archived") {
    renderNotes = archivedNotes;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-10 md:grid-cols-3 lg:grid-cols-4">
      {renderNotes.length === 0 ? (
        <div className="col-span-full flex items-center justify-center py-20">
          <p className="text-4xl text-text-secondary">
            {currentFilter === "all"
              ? "No notes to be shown"
              : `No ${currentFilter} notes to be shown.`}
          </p>
        </div>
      ) : (
        renderNotes.map((note) => (
          <Card
            key={note.id}
            title={note.title}
            text={note.text}
            isFocused={focusedNoteId === note.id}
            id={note.id}
            isArchived={note.isArchived}
            isPinned={note.isPinned}
          />
        ))
      )}
    </div>
  );
}

export default Cards;
