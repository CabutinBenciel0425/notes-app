import type { NotesState, NotesAction } from "./../sharedTypes/types";
import React, { createContext } from "react";

export type NotesContextType = {
  state: NotesState;
  dispatch: React.Dispatch<NotesAction>;
};

export const NotesContext = createContext<NotesContextType>({
  state: { notes: [] },
  dispatch: () => {},
});
