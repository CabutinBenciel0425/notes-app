import { MdOutlinePushPin, MdClose } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { useNotes } from "../hooks/useNotes";

type CardProps = {
  title?: string;
  text?: string;
  isFocused?: boolean;
  id: string;
};

function Card({ title = "Untitled", text, isFocused = false, id }: CardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const { deleteNote, updateNote, setFocusedNoteId, countUntitled } =
    useNotes();

  const handleCardClick = () => {
    if (!isEditing) {
      setIsEditing(true);
      setTimeout(() => titleRef.current?.focus(), 0);
    }
  };

  const handleBlur = (e: React.FocusEvent) => {
    if (!cardRef.current?.contains(e.relatedTarget as Node)) {
      setIsEditing(false);

      setFocusedNoteId(null);

      const newTitle = titleRef.current?.innerText.trim() || "";
      const newText = bodyRef.current?.innerText.trim() || "";

      let finalTitle = newTitle;
      if (!finalTitle) {
        finalTitle = `Untitled ${countUntitled + 1}`;
      }

      updateNote(id, finalTitle, newText);
    }
  };

  const handleTitleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      bodyRef.current?.focus();
    }
  };

  useEffect(() => {
    if (isFocused && !isEditing) {
      setTimeout(() => {
        setIsEditing(true);
        titleRef.current?.focus();
      }, 0);
    }
  }, [isFocused, isEditing]);

  useEffect(() => {
    if (isFocused && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [isFocused]);

  return (
    <div
      ref={cardRef}
      onClick={handleCardClick}
      onBlur={handleBlur}
      className={`
        flex flex-col gap-3 p-4 border rounded-lg bg-background
        transition-all duration-200 ease group 
        ${
          isEditing
            ? "border-accent ring-1 ring-accent cursor-text"
            : "border-border hover:border-accent cursor-pointer"
        }
      `}
    >
      <div className="flex items-center justify-between gap-2">
        <h2
          ref={titleRef}
          contentEditable={isEditing}
          suppressContentEditableWarning
          onKeyDown={handleTitleKeyDown}
          spellCheck="false"
          className={`
            text-3xl font-semibold text-text-primary flex-1 outline-none rounded px-1 -mx-1 
            ${
              isEditing
                ? "focus:bg-white/5 focus:ring-1 focus:ring-accent cursor-text whitespace-normal"
                : "cursor-pointer select-none truncate"
            }
            empty:before:content-['Untitled'] empty:before:text-text-secondary
          `}
        >
          {title}
        </h2>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              console.log("pin");
            }}
            className="text-accent hover:text-text-primary transition-colors duration-150 text-base cursor-pointer"
            aria-label="Pin note"
          >
            <MdOutlinePushPin />
          </button>
          <button
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              deleteNote(id);
            }}
            className="text-accent hover:text-red-400 transition-colors duration-150 text-base cursor-pointer"
            aria-label="Delete note"
          >
            <MdClose />
          </button>
        </div>
      </div>

      <div className="h-px bg-border" />

      <p
        ref={bodyRef}
        contentEditable={isEditing}
        suppressContentEditableWarning
        spellCheck="false"
        className={`
          text-lg text-text-secondary leading-relaxed outline-none rounded px-1 -mx-1 min-h-20 whitespace-pre-wrap text-wrap
          ${
            isEditing
              ? "focus:bg-white/5 focus:ring-1 focus:ring-accent cursor-text whitespace-pre-wrap"
              : "cursor-pointer select-none line-clamp-3"
          }
          empty:before:content-['Write_something...'] empty:before:text-accent/40
        `}
      >
        {text || ""}
      </p>

      {isEditing && (
        <p className="text-[15px] text-accent/50 text-right select-none">
          Click outside to save
        </p>
      )}
    </div>
  );
}

export default Card;
