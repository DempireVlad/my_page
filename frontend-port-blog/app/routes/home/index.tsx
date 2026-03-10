import FeaturedProjects from "~/components/Featuered_Projects";
import type { Route } from "./+types/index";
import type { Project, StrapiProject, StrapiResponse, StrapiPost } from "~/type";
// import AboutPreview from "~/components/About_Preview";
import type { PostMeta  } from "~/type";
import LatestPosts  from "~/components/LatestPosts";


export async function loader({ request }: Route.LoaderArgs): Promise<{ projects: Project[]; posts: PostMeta[]}> {
    const [projectsRes, postsRes] = await Promise.all([
        fetch(`${import.meta.env.VITE_API_URL}/projects?filters[featured][$eq]=true&populate=*`),
        fetch(new URL(`${import.meta.env.VITE_API_URL}/posts?populate=*`, request.url).href)
    ]);

    if (!projectsRes.ok) {
        throw new Response("Помилка завантаження проектів", { status: projectsRes.status });
    }
    if (!postsRes.ok) {
        throw new Response("Помилка завантаження постів", { status: postsRes.status });
    }
  

    const projectsJson: StrapiResponse<StrapiProject> = await projectsRes.json() ;
    const postsJson: StrapiResponse<StrapiPost> = await postsRes.json();
   

    const projects: Project[] = projectsJson.data.map((item) => ({
       id: item.id,
        documentId: item.documentId,
        title: item.title,
        description: item.description,
        image: item.image?.url
            ? `${item.image.url}`
            : '/images/no-image.png',
        url: item.url,
        date: item.date,
        category: item.category,
        featured: item.featured,

    })) 
    const posts: PostMeta[] = postsJson.data.map((item) => ({
        id: item.id.toString(),
        slug: item.slug,
        title: item.title,
        excerpt: item.excerpt,
        date: item.date,
    }));
    return { projects, posts };
}


export default function HomePage( { loaderData }: Route.ComponentProps) {
const { projects, posts } = loaderData as { projects: Project[]; posts: PostMeta[] };
  return (
    <>
      <FeaturedProjects projects={projects} count={projects.length} />
      <LatestPosts posts={posts} limit={2} />
    </>
    
  );
}
