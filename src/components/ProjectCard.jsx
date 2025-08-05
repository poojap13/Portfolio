export default function ProjectCard({ project }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow p-6 hover:shadow-xl transition">
      <h3 className="text-xl font-bold text-purple-700 mb-2">{project.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{project.tech}</p>
      <p className="text-gray-800 mb-4">{project.description}</p>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline text-sm"
        >
          View Project →
        </a>
      )}
    </div>
  );
}
