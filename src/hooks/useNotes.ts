import { useContext } from "react";
import { NotesContext } from "../context/NotesContextApi";
import { createDateNow, createId } from "../helpers/notes";

type AddNotesType = {
  title: string;
  text: string;
  isPinned: boolean;
  isArchived: boolean;
};

export function useNotes() {
  const context = useContext(NotesContext);
  const { dispatch, state, focusedNoteId, setFocusedNoteId } = context;

  function addNote({
    title = "",
    text = "",
    isPinned = false,
    isArchived = false,
  }: AddNotesType) {
    const id = createId();
    dispatch({
      type: "ADD_NOTE",
      payload: {
        id,
        date_created: createDateNow(),
        last_updated: createDateNow(),
        title,
        text,
        isPinned,
        isArchived,
      },
    });
    return id;
  }

  function deleteNote({ id }: { id: string }) {
    dispatch({
      type: "DELETE_NOTE",
      id,
    });
  }

  function archiveNote({ id }: { id: string }) {
    dispatch({
      type: "ARCHIVE_NOTE",
      id,
    });
  }

  function pinNote({ id }: { id: string }) {
    dispatch({
      type: "PIN_NOTE",
      id,
    });
  }

  return {
    state,
    addNote,
    deleteNote,
    archiveNote,
    pinNote,
    focusedNoteId,
    setFocusedNoteId,
  };
}
