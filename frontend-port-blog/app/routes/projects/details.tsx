import type { Route } from "./+types/details";
import type { Project, StrapiProject, StrapiResponse } from "~/type";
import { Link } from "react-router";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export async function loader({ params }: Route.LoaderArgs) {
  const { id } = params;
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/projects?filters[documentId][$eq]=${id}&populate=*`,
  );
  if (!res.ok) {
    throw new Response("Failed to fetch project", { status: 404 });
  }
  const json: StrapiResponse<StrapiProject> = await res.json();
  if (!json.data.length) {
    throw new Response("Project not found", { status: 404 });
  }

  const item = json.data[0];

  const project: Project = {
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    image: item.image?.url ? `${item.image.url}` : "/images/no-image.png",
    url: item.url,
    date: item.date,
    category: item.category,
    featured: true,
  };

  return project;
}

export function HydrateFallback() {
  return <div>Завантаження...</div>;
}

const ProjectDetailsPage = ({ loaderData }: Route.ComponentProps) => {
  const project = loaderData as Project;
  console.log(project);

  return (
    <>
    
      <Link
        to="/projects"
        className="group inline-flex items-center gap-2 text-blue-500 font-medium mb-4 relative"
      >
        <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-2" />
        До проджектів
        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
      </Link>
      <div>
        <img src={project.image} alt={project.title} />
        <div>
          <h1 className="text-2xl py-2">{project.title}</h1>
          <p className="text-gray-500">
            {new Date(project.date).toLocaleDateString()}
          </p>
          <p className="py-2">{project.description}</p>
          <a
            href={project.url}
            className="group inline-flex items-center gap-2 mb-4 text-blue-500 relative"
          >
            Переглянути сайт
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </>
  );
};
export default ProjectDetailsPage;
