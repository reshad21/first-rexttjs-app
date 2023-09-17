
const loadSingleBlogData = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return await res.json();
};

export default loadSingleBlogData;