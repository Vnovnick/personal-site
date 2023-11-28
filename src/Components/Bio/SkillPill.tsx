import React from "react";

export default function SkillPill({
  text,
  colorClasses,
}: {
  text: string;
  colorClasses?: string;
}) {
  return (
    <div
      className={`px-3 py-1.5 h-fit text-sm w-fit rounded-2xl ${
        colorClasses ?? "bg-green-500/30 text-green-200"
      }`}
    >
      {text}
    </div>
  );
}

SkillPill.defaultProps = {
  colorClasses: undefined,
};
