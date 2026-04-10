import type { NotesType } from "../sharedTypes/types";

export const notesData: NotesType[] = [
  {
    id: "1",
    date_created: "2026-04-01T09:15:00Z",
    last_updated: "2026-04-01T09:15:00Z",
    title: "React Context Study",
    text: "Exploring Context and Reducer patterns to simplify global state management. I’ll set up a demo project to see how dispatch actions and shared state flow together, then reflect on when Context is best used compared to other libraries.",
    isPinned: true,
    isArchived: false,
  },
  {
    id: "2",
    date_created: "2026-04-03T14:40:00Z",
    last_updated: "2026-04-04T10:00:00Z",
    title: "UI Wireframe Draft",
    text: "Drafting a wireframe for the notes app with CRUD functionality. The layout will highlight a sidebar for pinned and archived notes, plus a main grid for active notes, with annotations for spacing and responsive behavior.",
    isPinned: false,
    isArchived: false,
  },
  {
    id: "3",
    date_created: "2026-04-05T18:25:00Z",
    last_updated: "2026-04-06T08:30:00Z",
    title: "LocalStorage Experiment",
    text: "Testing how notes can be saved and retrieved from localStorage. I’ll connect helper functions to React hooks, then evaluate its limitations compared to more scalable storage solutions.",
    isPinned: false,
    isArchived: false,
  },
  {
    id: "4",
    date_created: "2026-04-07T11:05:00Z",
    last_updated: "2026-04-07T11:45:00Z",
    title: "Pinned Notes Feature",
    text: "Adding a pin option so important notes stay at the top. I’ll design a clear icon indicator and handle edge cases like multiple pins or unpinning, ensuring the feature feels intuitive.",
    isPinned: true,
    isArchived: false,
  },
  {
    id: "5",
    date_created: "2026-04-08T20:50:00Z",
    last_updated: "2026-04-09T07:20:00Z",
    title: "Archive Logic",
    text: "Implementing archiving instead of deletion to preserve old notes. Archived notes will appear in a separate view with muted styling, making them distinct but still recoverable when needed.",
    isPinned: false,
    isArchived: true,
  },
];
