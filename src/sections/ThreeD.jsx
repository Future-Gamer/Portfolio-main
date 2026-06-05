import { useState, useEffect } from 'react';

const ThreeD = () => {
  const [selectedModel, setSelectedModel] = useState(null);
  const basePath = import.meta.env.BASE_URL;

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedModel) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedModel]);
  
  const models3D = [
    {
      id: 1,
      name: "Halo",
      description: "A meticulously crafted 3D character model inspired by sci-fi gaming. Features detailed armor design, realistic texturing, and optimized mesh for real-time rendering.",
      tags: ["Character", "Sci-Fi", "Blender"],
      image: `${basePath}assets/characters-3D/Halo.png`,
      modelPath: "/models/tenhun_falling_spaceman_fanart.glb"
    },
    {
      id: 2,
      name: "Wolverine",
      description: "High-fidelity 3D character model featuring iconic superhero design. Includes intricate suit details, weapon rigging, and dynamic pose setup for animation.",
      tags: ["Character", "Superhero", "Blender"],
      image: `${basePath}assets/characters-3D/Wolverine.jpg`,
      modelPath: null
    },
    {
      id: 3,
      name: "Godzilla",
      description: "Large-scale creature model with detailed sculpting and texturing. Showcases advanced mesh topology and dynamic rigging for creature animation.",
      tags: ["Creature", "Monster", "Blender"],
      image: `${basePath}assets/characters-3D/Godzilla-right.png`,
      modelPath: null
    },
    {
      id: 4,
      name: "Dr. Doom",
      description: "Detailed villain character model with intricate armor details and cape dynamics. Demonstrates advanced material and lighting setup.",
      tags: ["Character", "Villain", "Blender"],
      image: `${basePath}assets/characters-3D/Dr.Doom.png`,
      modelPath: null
    },
    {
      id: 5,
      name: "Night King",
      description: "Fantasy character model featuring complex armor and ice effects. Showcases advanced VFX integration with 3D character models.",
      tags: ["Character", "Fantasy", "Blender"],
      image: `${basePath}assets/characters-3D/Night_King.png`,
      modelPath: null
    },
    {
      id: 6,
      name: "4 Horsemen of Death",
      description: "Epic multi-character composition featuring detailed character designs and environmental storytelling. Demonstrates large-scale scene composition.",
      tags: ["Character", "Composition", "Blender"],
      image: `${basePath}assets/characters-3D/4HorsemenOfDeath.png`,
      modelPath: null
    }
  ];

  return (
    <section id="three-d" className="c-space section-spacing">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-heading">Model Gallery</h2>
          <p className="max-w-2xl mt-4 text-neutral-400">
            I build immersive 3D experiences using Unity, Blender, and realtime interaction design. This section highlights the systems, scenes, and assets that bring my projects to life.
          </p>
        </div>

        {/* <div className="grid gap-6 lg:grid-cols-3 mb-12">
          <article className="space-y-4 rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-white">Realtime Scenes</h3>
            <p className="text-neutral-300">
              Procedural environments, lighting rigs, and visual polish for gameplay-ready 3D scenes in Unity.
            </p>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>Interactive worldbuilding</li>
              <li>Shader-driven effects</li>
              <li>Dynamic scene optimization</li>
            </ul>
          </article>

          <article className="space-y-4 rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-white">3D Modeling</h3>
            <p className="text-neutral-300">
              Asset creation and animation workflows in Blender, from characters to environment props.
            </p>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>Low-poly & high-poly modeling</li>
              <li>Animation setup</li>
              <li>Texture and lighting passes</li>
            </ul>
          </article>

          <article className="space-y-4 rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-white">XR & Immersion</h3>
            <p className="text-neutral-300">
              Creating immersive XR interactions with Meta XR SDK and Unity XR Toolkit for engaging player experiences.
            </p>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>Spatial interaction design</li>
              <li>Hand tracking & controller mapping</li>
              <li>Performance-first XR builds</li>
            </ul>
          </article>
        </div> */}

        {/* 3D Models Gallery */}
        <div className="mt-12">
          {/* <h3 className="text-2xl font-bold text-white mb-8">Model Gallery</h3> */}
          <div className="grid gap-6 lg:grid-cols-3">
            {models3D.map((model) => (
              <div
                key={model.id}
                className="group rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-xl overflow-hidden hover:border-white/20 transition-all duration-300"
              >
                {/* Model Preview */}
                <div className="w-full h-48 bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl mb-6 flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-all duration-300 overflow-hidden">
                  {model.image ? (
                    <img
                      src={model.image}
                      alt={model.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="text-4xl mb-2">🎨</div>
                      <p className="text-sm text-neutral-400">Image Coming Soon</p>
                    </div>
                  )}
                </div>

                {/* Model Info */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white">{model.name}</h4>
                  <p className="text-sm text-neutral-400 line-clamp-3">
                    {model.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {model.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-white/10 text-neutral-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  {model.modelPath ? (
                    <button 
                      onClick={() => setSelectedModel(model)}
                      className="w-full mt-4 px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors duration-200 text-sm font-medium border border-white/10"
                    >
                      View Interactive Model
                    </button>
                  ) : (
                    <button 
                      onClick={() => setSelectedModel(model)}
                      className="w-full mt-4 px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors duration-200 text-sm font-medium border border-white/10"
                    >
                      View Model
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Modal */}
        {selectedModel && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto"
            onClick={() => setSelectedModel(null)}
          >
            <div 
              className="relative max-w-4xl w-full bg-slate-950 rounded-3xl border border-white/10 shadow-2xl overflow-hidden my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedModel(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/10"
              >
                <svg 
                  className="w-6 h-6 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-8 max-h-[calc(90vh-80px)] overflow-y-auto">
                {/* Image Section */}
                <div className="lg:col-span-2">
                  <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5">
                    <img
                      src={selectedModel.image}
                      alt={selectedModel.name}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                {/* Info Section */}
                <div className="flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {selectedModel.name}
                      </h3>
                      <p className="text-neutral-400">
                        {selectedModel.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-widest text-neutral-500">Tags</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedModel.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1 rounded-full bg-white/10 text-neutral-300 border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Modal Action Button */}
                  {selectedModel.modelPath && (
                    <button className="w-full mt-6 px-4 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors duration-200 text-sm font-medium border border-white/10">
                      Open 3D Viewer
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ThreeD;
