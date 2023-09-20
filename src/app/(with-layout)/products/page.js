import SingleProduct from "@/app/components/SingleProduct";
import getAllproducts from "@/app/utils/getAllproducts";
const productsPage = async ({ searchParams }) => {
    const products = await getAllproducts((searchParams.categoryId));
    return (
        <div>
            <p className="text-xl font-bold mb-4">This is products page: {products.length}</p>
            <div className="grid grid-cols-4 gap-4">
                {products.map((product) => (
                    <SingleProduct key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default productsPage;