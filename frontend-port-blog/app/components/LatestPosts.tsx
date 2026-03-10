import {Link} from 'react-router'
import type { PostMeta } from '~/type';

type LatestPostsProps = {
    posts: PostMeta[];
    limit?: number;
}

const LatestPosts = ({ posts, limit = 2 }: LatestPostsProps) => {
    const sorted = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const latestPosts = sorted.slice(0, limit);
    return (
        <section>
            <h2 className="text-2xl font-bold mb-4">Latest Posts 🤖</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                {latestPosts.map((post)=>{
                    return <Link 
                    key={post.slug}
                    className='p-4 border bg-gray-800 border-gray-700 rounded-lg  hover:sadow-md transition-shadow'
                    to={`/blog/${post.slug}`} >
                    <h3 className='text-lg font-semibold text-blue-400'>{post.title}</h3>
                    <p className='text-gray-300 text-sm mt-3'>{post.excerpt}</p>
                    <span className='text-gray-500 text-xs block mt-3'>{new Date(post.date).toLocaleDateString()}</span>
                    </Link>;
                })}
            </div>
        </section>
    )
    }



export default LatestPosts;