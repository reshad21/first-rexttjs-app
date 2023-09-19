
const getAllCategories = async () => {
    const res = await fetch("http://localhost:5000/categories", {
        cache: "force-cache"
    });
    const data = await res.json();
    return data;
};

export default getAllCategories;