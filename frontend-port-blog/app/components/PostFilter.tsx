
type PostFilterProps = {
    searchQuery: string;
    onSearchChange: (value: string) => void;
}

const PostFilter = ({ searchQuery, onSearchChange }: PostFilterProps) => {
return (
    <div>
        <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full p-2 border border-gray-700 rounded mb-4 bg-gray-800 focus:outline-0 focus:ring-2 focus:ring-blue-500"
        />
    </div>
)
}

export default PostFilter;