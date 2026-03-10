import ReactMarkDown from "react-markdown";
import type { Route } from "./+types/details";
import type { PostMeta, StrapiPost, StrapiResponse } from "~/type";
import { Link } from "react-router"

export async function loader({ params, request }: Route.LoaderArgs) {
    const { slug } = params;
    const url = new URL(`${import.meta.env.VITE_API_URL}/posts?populate=*`, request.url);
    const res =  await fetch(url.href);
    if (!res.ok) {
        throw new Response("Error loading posts", { status: res.status });
    }

    const index: StrapiResponse<StrapiPost> = await res.json();
    const postMeta = index.data.map((item: StrapiPost) => ({
        id: item.id.toString(),
        slug: item.slug,
        title: item.title,
        excerpt: item.excerpt,
        date: item.date,
    })).find((post) => post.slug === slug);

    
    if (!postMeta) {
        throw new Response("Post not found", { status: 404 });

    }

    const content = index.data.find((item: StrapiPost) => item.slug === slug)?.content || "";

    return { postMeta, markdown: content };
}

type BlogPostDetailPageProps = {
    loaderData: {
        postMeta: PostMeta;
        markdown: string;
    }
}

const BlogPostDetailPage = ({ loaderData }: BlogPostDetailPageProps) => {
    const { postMeta, markdown } = loaderData;
    return(
       <section>
        <h1 className="text-4xl font-bold mb-4">{postMeta.title}</h1>
        <p className="text-gray-600 mb-6">{new Date(postMeta.date).toLocaleDateString()}</p>
       <div className="prose prose-invert" > <ReactMarkDown>{markdown}</ReactMarkDown></div>
         {/* <Link to="/blog" className="text-blue-500 hover:underline mt-6 inline-block">Back to Blog</Link> */}
 <Link
  to="/blog"
  className="
    group inline-flex items-center gap-2 mt-4
    text-blue-500 font-medium relative
    after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-0.5
    after:bg-blue-500 after:transition-all after:duration-300
    hover:after:w-full
  "
>
  Back to Blog
</Link>
       </section>
    )
}

export default BlogPostDetailPage;