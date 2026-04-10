import type React from "react";
import type { NotesState } from "../sharedTypes/types";
import { useEffect, useReducer, useState } from "react";
import { notesReducer } from "../reducers/notesReducer";
import { NotesContext } from "./NotesContextApi";
import { notesData } from "../data/notesData";

export default function NotesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storedLists = localStorage.getItem("notes");

  const initialState: NotesState = storedLists
    ? { notes: JSON.parse(storedLists) }
    : { notes: notesData };

  const [state, dispatch] = useReducer(notesReducer, initialState);

  const [focusedNoteId, setFocusedNoteId] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(state.notes));
  }, [state.notes]);

  return (
    <NotesContext.Provider
      value={{ state, dispatch, focusedNoteId, setFocusedNoteId }}
    >
      {children}
    </NotesContext.Provider>
  );
}
