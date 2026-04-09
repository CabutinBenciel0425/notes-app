import type { NotesType } from "../sharedTypes/types";

export const notesData: NotesType[] = [
  {
    id: "1",
    date_created: "2026-04-01T09:15:00Z",
    last_updated: "2026-04-01T09:15:00Z",
    title: "React Context Study",
    text: "Review Context + Reducer patterns for global state management.",
    isPinned: true,
    isArchived: false,
  },
  {
    id: "2",
    date_created: "2026-04-03T14:40:00Z",
    last_updated: "2026-04-04T10:00:00Z",
    title: "UI Wireframe Draft",
    text: "Sketch layout for notes app with CRUD functionality.",
    isPinned: false,
    isArchived: false,
  },
  {
    id: "3",
    date_created: "2026-04-05T18:25:00Z",
    last_updated: "2026-04-06T08:30:00Z",
    title: "LocalStorage Experiment",
    text: "Test saving and loading notes data from localStorage.",
    isPinned: false,
    isArchived: false,
  },
  {
    id: "4",
    date_created: "2026-04-07T11:05:00Z",
    last_updated: "2026-04-07T11:45:00Z",
    title: "Pinned Notes Feature",
    text: "Add ability to pin important notes at the top of the list.",
    isPinned: true,
    isArchived: false,
  },
  {
    id: "5",
    date_created: "2026-04-08T20:50:00Z",
    last_updated: "2026-04-09T07:20:00Z",
    title: "Archive Logic",
    text: "Implement archiving instead of permanent deletion for old notes.",
    isPinned: false,
    isArchived: true,
  },
];
