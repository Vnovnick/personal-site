import React, { ReactElement, useRef, useEffect } from "react";

interface ScrollDivProps {
  id?: string;
  className?: string;
  children: ReactElement | ReactElement[] | string;
}

const scrollStyleSwitch = (element: HTMLDivElement) => {
  element.classList.add("scrollbar-thumb-green-600/50");
  setTimeout(() => {
    element.classList.remove("scrollbar-thumb-green-600/50");
  }, 700);
};

export default function ScrollDiv({ id, className, children }: ScrollDivProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = ref.current;
    currentElement!.addEventListener("scroll", (event) => {
      scrollStyleSwitch(currentElement!);
    });
    return () => {
      currentElement!.removeEventListener("scroll", (event) => {
        scrollStyleSwitch(currentElement!);
      });
    };
  }, []);

  return (
    <div
      id={id}
      className={`scrollbar-thin hover:scrollbar-thumb-green-500/50 ${className}`}
      ref={ref}
    >
      {children}
    </div>
  );
}

ScrollDiv.defaultProps = {
  id: "",
  className: "",
};
