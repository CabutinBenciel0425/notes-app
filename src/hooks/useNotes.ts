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

  function deleteNote(id: string) {
    dispatch({
      type: "DELETE_NOTE",
      id,
    });
  }

  function archiveNote(id: string) {
    dispatch({
      type: "ARCHIVE_NOTE",
      id,
    });
  }

  function pinNote(id: string) {
    dispatch({
      type: "PIN_NOTE",
      id,
    });
  }

  function updateNote(id: string, title: string, text: string) {
    dispatch({
      type: "UPDATE_NOTE",
      payload: {
        id,
        title,
        text,
        last_updated: createDateNow(),
      },
    });
  }

  return {
    state,
    addNote,
    deleteNote,
    updateNote,
    archiveNote,
    pinNote,
    focusedNoteId,
    setFocusedNoteId,
  };
}
