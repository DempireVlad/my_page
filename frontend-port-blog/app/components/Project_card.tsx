import type { Project } from "~/type";
import { Link } from "react-router";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link to={`/projects/${project.documentId}`} className="">
      <div
        key={project.id}
        className="bg-gray-800 border  border-gray-600 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200"
      >
        <img
          src={project.image}
          alt={project.title}
          className="h-50 w-full object-cover"
        />
        <div className="p-5">
          <h3 className="text-xl font-bold mb-2 text-blue-500">
            {project.title}
          </h3>
          <p className="mb-4 text-gray-300 text-sm line-clamp-3">{project.description}</p>
          <div className="flex justify-between items-end text-sm text-gray-400">
            <span>{project.category}</span>
            <span>{new Date(project.date).toLocaleDateString()}</span>
            
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
