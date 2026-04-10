import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant: "primary" | "small";
  onClick: () => void;
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  onClick,
  className,
}: ButtonProps) {
  const baseStyles =
    "rounded font-semibold transition-all duration-300 active:scale-97 cursor-pointer bg-transparent border-transparent";

  const variants = {
    primary: "px-2 py-1 text-xl hover:border-border",
    small: "p-1 text-md",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], className)}
    >
      {children}
    </button>
  );
}
