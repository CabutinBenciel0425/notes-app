import { FaRegNoteSticky } from "react-icons/fa6";
import { MdOutlinePushPin, MdOutlineArchive } from "react-icons/md";
import "../styles.css";
import { useState, useEffect } from "react";

const navItems = [
  { icon: <FaRegNoteSticky />, label: "Untitled Notes" },
  { icon: <MdOutlinePushPin />, label: "Pinned Notes" },
  { icon: <MdOutlineArchive />, label: "Archived Notes", small: true },
];

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsOpen(e.matches);
    handler(mq);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <aside
      className="relative flex flex-col bg-background border-r-2 border-border transition-all duration-300 ease-in-out shrink-0"
      style={{ width: isOpen ? "11rem" : "3.5rem" }}
    >
      <div
        className={`flex pt-3 pb-2 px-2 ${
          isOpen ? "justify-end" : "justify-center"
        }`}
      >
        <button
          onClick={() => setIsOpen((s) => !s)}
          aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
          className="text-accent hover:text-text-primary transition-colors duration-200 rounded p-1 cursor-pointer"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <rect
                x="10"
                y="43"
                width="80"
                height="13"
                rx="6"
                transform="rotate(45 50 49.5)"
              />
              <rect
                x="10"
                y="43"
                width="80"
                height="13"
                rx="6"
                transform="rotate(-45 50 49.5)"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <rect x="10" y="15" width="80" height="13" rx="6" />
              <rect x="10" y="43" width="80" height="13" rx="6" />
              <rect x="10" y="71" width="80" height="13" rx="6" />
            </svg>
          )}
        </button>
      </div>

      <ul className="flex flex-col gap-1 flex-1 px-1 py-4">
        {navItems.map(({ icon, label, small }) => (
          <li key={label} className="w-full">
            <button
              className={`
                w-full flex flex-row items-center gap-3
                border border-transparent hover:border-border
                transition-all duration-200 ease rounded p-3
                text-text-secondary hover:text-text-primary cursor-pointer
                ${isOpen ? "justify-start" : "justify-center"}
              `}
            >
              <span className="text-xl shrink-0 text-accent">{icon}</span>
              {isOpen && (
                <span
                  className={`font-medium whitespace-nowrap overflow-hidden text-ellipsis leading-tight ${
                    small ? "text-xs" : "text-sm"
                  }`}
                >
                  {label}
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
