
const getSingleProduct = async (id) => {
    const res = await fetch(`http://localhost:5000/products/${id}`);
    const data = await res.json();
    return data;
};

export default getSingleProduct;