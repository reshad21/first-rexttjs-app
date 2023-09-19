
const getAllproducts = async (categoryId) => {
    let url = "http://localhost:5000/products";
    if (categoryId) {
        url+= '?categoryId='+ categoryId;
    }
    const res = await fetch(url, {
        cache: "no-cache"
    });
    const data = await res.json();
    return data;
};

export default getAllproducts;