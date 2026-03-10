import type { PostMeta } from "~/type";
import { Link } from "react-router";

const PostCard = ({ post }: { post: PostMeta }) => {
  return (
    <article
      key={post.slug}
      className="mb-6 p-4 bg-gray-800 rounded shadow-sm hover:shadow-md transition"
    >
      <h2 className="text-2xl font-semibold mb-2 text-blue-500 ">
        {post.title}
      </h2>
      <p className="text-gray-600 mb-2">
        {new Date(post.date).toLocaleDateString()}
      </p>
      <p>{post.excerpt}</p>
      <Link to={post.slug} className="text-blue-500 hover:underline">
        Read more...
      </Link>
    </article>
  );
};

export default PostCard;
