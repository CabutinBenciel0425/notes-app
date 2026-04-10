import { createDateNow } from "../helpers/notes";
import type { NotesAction, NotesState } from "../sharedTypes/types";

export function notesReducer(state: NotesState, action: NotesAction) {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        notes: [...state.notes, action.payload],
      };
    case "DELETE_NOTE":
      return {
        notes: state.notes.filter((n) => n.id !== action.id),
      };
    case "ARCHIVE_NOTE":
      return {
        notes: state.notes.map((n) =>
          n.id === action.id
            ? {
                ...n,
                isArchived: !n.isArchived,
              }
            : n,
        ),
      };

    case "PIN_NOTE":
      return {
        notes: state.notes.map((n) =>
          n.id === action.id
            ? {
                ...n,
                isPinned: !n.isPinned,
              }
            : n,
        ),
      };

    case "UPDATE_NOTE":
      return {
        notes: state.notes.map((n) =>
          n.id === action.payload.id
            ? {
                ...n,
                title: action.payload.title,
                text: action.payload.text,
                last_updated: createDateNow(),
              }
            : n,
        ),
      };

    case "SET_FOCUSED_NOTE":
      return {
        ...state,
        focusedNoteId: action.id,
      };
    default:
      return state;
  }
}
