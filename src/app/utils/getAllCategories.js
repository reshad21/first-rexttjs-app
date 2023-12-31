
const getAllCategories = async () => {
    const res = await fetch("http://localhost:5000/categories", {
        next: { revalidate: 5 }
    });
    const data = await res.json();
    return data;
};

export default getAllCategories;