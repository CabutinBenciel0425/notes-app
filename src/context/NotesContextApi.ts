import type { NotesState, NotesAction } from "./../sharedTypes/types";
import React, { createContext } from "react";

export type NotesContextType = {
  state: NotesState;
  dispatch: React.Dispatch<NotesAction>;
  focusedNoteId: string | null;
  setFocusedNoteId: React.Dispatch<React.SetStateAction<string | null>>;
};

export const NotesContext = createContext<NotesContextType>({
  state: { notes: [] },
  dispatch: () => {},
  focusedNoteId: null,
  setFocusedNoteId: () => {},
});
