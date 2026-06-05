import { useState } from "react";

const skillCategories = [
  {
    title: "Game Engines",
    items: ["Unity 3D", "Unity 2D"],
  },
  {
    title: "Programming",
    items: [
      "C# (Unity Scripting)",
      "Python",
      "Java",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "XR / VR",
    items: [
      "Meta XR SDK",
      "Unity XR Toolkit",
      "Hand-Tracking",
      "Controller Mapping",
    ],
  },
  {
    title: "3D & Art Tools",
    items: [
      "Blender (Modelling, Animation, Asset Creation)",
      "Unity Terrain Editor",
      "Particle Systems",
      "Lighting",
    ],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "GitHub",
      "Visual Studio",
      "Unity Hub",
      "Unity Play Mode Testing",
    ],
  },
  {
    title: "Soft Skills",
    items: [
      "Leadership",
      "Communication",
      "Problem-Solving",
      "Teamwork",
      "Time Management",
      "Adaptability",
    ],
  },
];

export function Frameworks() {
  const [active, setActive] = useState(skillCategories[0].title);
  const activeCategory = skillCategories.find((category) => category.title === active);

  return (
    <div className="grid h-full min-h-[520px] gap-6 lg:grid-cols-[220px_minmax(360px,1fr)]">
      <div className="flex flex-col gap-3">
        {skillCategories.map((category) => (
          <button
            key={category.title}
            type="button"
            onMouseEnter={() => setActive(category.title)}
            onFocus={() => setActive(category.title)}
            className={`rounded-3xl border px-4 py-4 text-left transition duration-200 ${
              active === category.title
                ? "border-indigo-400 bg-indigo-500/10 text-white"
                : "border-white/10 bg-white/5 text-neutral-300 hover:border-indigo-300 hover:bg-white/10"
            }`}
          >
            <span className="flex items-center gap-3 text-sm font-semibold">
              <span className="inline-block h-2 w-2 rounded-full bg-indigo-400" />
              {category.title}
            </span>
          </button>
        ))}
      </div>

      <div className="relative rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.35)] backdrop-blur-xl">
        <div className="absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400" />
        <div className="relative mt-6">
          <h3 className="mb-4 text-2xl font-semibold text-white">{activeCategory.title}</h3>
          <ul className="space-y-3">
            {activeCategory.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-neutral-200">
                <span className="mt-2 inline-block h-2 w-2 rounded-full bg-indigo-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
