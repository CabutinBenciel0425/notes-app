export type NotesType = {
  id: string;
  date_created: string;
  last_updated: string;
  title: string;
  text: string;
  isPinned: boolean;
  isArchived: boolean;
};

export type NotesState = {
  notes: NotesType[];
};

export type NotesAction =
  | { type: "ADD_NOTE"; payload: NotesType }
  | { type: "DELETE_NOTE"; id: string }
  | { type: "ARCHIVE_NOTE"; id: string }
  | { type: "PIN_NOTE"; id: string }
  | { type: "UPDATE_NOTE"; payload: NotesType };
