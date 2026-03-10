import type { Route } from "./+types/index";
import type { PostMeta, StrapiPost, StrapiResponse  } from "~/type";
import PostCard from "~/components/PostCard";
import Pagination from "~/components/Pagination";
import { useState } from "react";
import PostFilter from "~/components/PostFilter";


export async function loader({request}: Route.LoaderArgs): Promise<{ posts: PostMeta[] }> {
    const url = new URL(`${import.meta.env.VITE_API_URL}/posts?populate=*`, request.url);
    const res = await fetch(url.href);
    if (!res.ok) {
        throw new Response("Помилка завантаження постів", { status: res.status });
    }
    const data: StrapiResponse<StrapiPost> = await res.json();
    const posts: PostMeta[] = data.data.map((item: StrapiPost) => ({
        id: item.id.toString(),
        slug: item.slug,
        title: item.title,
        excerpt: item.excerpt,
        date: item.date,
    }));

    return { posts };

}

const BlogPage = ({loaderData}: Route.ComponentProps) => {
    const { posts } = loaderData as { posts: PostMeta[] }; 
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState(""); 
    const postsPerPage = 4;

    const filteredPosts = posts.filter((post) => {
        const query = searchQuery.toLowerCase();
        return post.title.toLowerCase().includes(query) || post.excerpt.toLowerCase().includes(query);
    })
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <>
           <section className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mx-auto text-center mb-8"> Blog </h1>
            <PostFilter searchQuery={searchQuery} onSearchChange={(query) => {
                setSearchQuery(query);
                setCurrentPage(1);
            }}
             />
            { currentPosts.length === 0 ? (<p className="text-center">No posts found 🥺 </p>) : (
                currentPosts.map((post)=>(
              <PostCard key={post.slug} post={post} />
            ))
            )}
           </section>
           {totalPages > 1 && (
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
           )}
        </>
    )
}

export default BlogPage;