import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaDocker
} from "react-icons/fa";

import {
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss
} from "react-icons/si";

export default function TechStack() {
  const techs = [
    FaReact,
    FaPython,
    FaNodeJs,
    SiDjango,
    SiMongodb,
    SiPostgresql,
    SiTailwindcss,
    FaGitAlt,
    FaDocker,
  ];

  return (
    <section className="py-32" id="tech">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-16">
          Tech Stack
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-8">

          {techs.map((Icon, index) => (
            <div
              key={index}
              className="glass p-8 rounded-3xl flex items-center justify-center"
            >
              <Icon size={55} />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}