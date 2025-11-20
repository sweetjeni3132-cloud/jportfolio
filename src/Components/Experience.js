

export default function Experience(){

const experiences = [
  {
    role: "Junior Developer",
    company: "Excrin Think Labs",
    duration: "Jan 2022 – sep 2023",
    location: "Remote",
    details: [
      "Optimized website performance using Elementor, WP Bakery and various plugins",
      "Improved performance by 30% through code optimization",
      "Collaborated with designers and development team"
    ],
    skills: [ "Wordpress", "React", "TailwindCSS"]
  },
  {
    role: "Web Developer Intern",
    company: "Excrin Think Labs",
    duration: "Jun 2021 – Dec 2021",
    location: "Remote",
    details: [
      "Developed landing pages and dashboards",
      "Integrated third-party APIs",
      "Worked closely with senior developers"
    ],
    skills: ["JavaScript", "HTML/CSS", "Wordpress"]
  }
];

  return (
        <div className="max-w-4xl mx-auto px-6 py-12"id="experience">
      <h2 className="text-3xl font-bold text-black-800 mb-8 w-[160px] border-b-4">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 border-l-4 border-indigo-600"
          >
            <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
            <p className="text-indigo-600 font-medium">{exp.company}</p>
            <p className="text-sm text-gray-500 mb-4">
              {exp.duration} • {exp.location}
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {exp.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


