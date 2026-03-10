import type { Project } from "~/type";
import ProjectCard from "./Project_card";


const FeaturedProjects = ({ projects, count }: { projects: Project[], count: number }) => {
    const featured = projects.filter(project => project.featured).slice(0, count);
    return (
        <section className="my-12 ">
            <h2 className="text-3xl font-bold mb-8 text-center ">Featured Projects ✌️</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6   ">
                {featured.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}

export default FeaturedProjects;