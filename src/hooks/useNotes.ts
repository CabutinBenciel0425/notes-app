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
  const { dispatch, state } = context;

  function addNote({
    title = "Untitled",
    text,
    isPinned = false,
    isArchived = false,
  }: AddNotesType) {
    dispatch({
      type: "ADD_NOTE",
      payload: {
        id: createId(),
        date_created: createDateNow(),
        last_updated: createDateNow(),
        title,
        text,
        isPinned,
        isArchived,
      },
    });
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

  return { state, addNote, deleteNote, archiveNote, pinNote };
}
