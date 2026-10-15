"use client";

import { createContext, useContext } from "react";

export const MotionArmedContext = createContext(true);

function useArmed() {
  return useContext(MotionArmedContext);
}

type SplitLineProps = Readonly<{
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  step?: number;
}>;

export function SplitLine({
  text,
  as: Tag = "h1",
  className = "",
  delay = 0,
  step = 48,
}: SplitLineProps) {
  const armed = useArmed();
  const words = text.split(" ");

  return (
    <Tag className={`split-line ${className}`}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="split-word">
          <span
            className={`split-word-inner ${armed ? "is-armed" : ""}`}
            style={{ animationDelay: `${delay + i * step}ms` }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}

type FadeProps = Readonly<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}>;

export function Fade({ children, className = "", delay = 0 }: FadeProps) {
  const armed = useArmed();
  return (
    <div
      className={`motion-fade ${armed ? "is-armed" : ""} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
