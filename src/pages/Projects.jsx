import React from "react";
import { Cog, Wrench, Factory, Drill, PackageCheck } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "Custom Gear Manufacturing",
      description:
        "Designed and produced high-precision industrial gears for heavy-duty machinery.",
      icon: <Cog size={24} />,
      tech: ["CNC Machining", "Heat Treatment", "Steel Alloy"],
      link: "#",
    },
    {
      title: "Hydraulic Cylinder Components",
      description:
        "Manufactured piston rods, cylinder heads, and seals for hydraulic systems.",
      icon: <Wrench size={24} />,
      tech: ["Lathe Turning", "Polishing", "Surface Coating"],
      link: "#",
    },
    {
      title: "Machine Body Frame Assembly",
      description:
        "Developed strong metal frames for industrial cutting and drilling machines.",
      icon: <Factory size={24} />,
      tech: ["Welding", "Fabrication", "Powder Coating"],
      link: "#",
    },
    {
      title: "Drilling Machine Spare Parts",
      description:
        "Produced precision drill chucks, shafts, clamps, and mounting brackets.",
      icon: <Drill size={24} />,
      tech: ["CNC Milling", "Laser Cutting"],
      link: "#",
    },
    {
      title: "Packaging Machine Parts",
      description:
        "Created custom rollers, gears, and cutting blades for packaging automation.",
      icon: <PackageCheck size={24} />,
      tech: ["Stainless Steel", "Wire Cutting", "Grinding"],
      link: "#",
    },
  ];

  return (
    <div>
      <section className="relative bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className=" text-xl md:text-4xl md:text-3xl font-bold  heding">
            Our Manufacturing Projects
          </h1>
          <p className=" text-[14px] md:text-lg discription md:text-sm leading-relaxed max-w-3xl mx-auto text-gray-300">
            A showcase of the high-quality, precision-engineered machine parts
            we have created for clients across various industries.
          </p>
        </div>
      </section>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 p-4">
        {projects.map((p, i) => (
          <div
            key={i}
            className="p-5 border app-Shadow rounded-xl border-[#e9e9e993] transition bg-white"
          >
            <div className="flex items-center gap-2 mb-3">
             <p className="p-2 bg-black rounded-lg  text-white">
               {p.icon}
             </p>
              <h2 className="text-lg font-semibold">{p.title}</h2>
            </div>

            <p className="text-sm text-gray-600">{p.description}</p>

            <div className="flex flex-wrap gap-2 mt-3">
              {p.tech.map((t, j) => (
                <span
                  key={j}
                  className="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
