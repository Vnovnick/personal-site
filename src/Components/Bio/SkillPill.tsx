import React from "react";

export default function SkillPill({ text }: { text: string }) {
  return (
    <div className="px-3 py-1.5 bg-green-500/30 text-sm w-fit rounded-2xl text-green-200">
      {text}
    </div>
  );
}
