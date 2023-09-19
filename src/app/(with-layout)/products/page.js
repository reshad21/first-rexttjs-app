import SingleProduct from "@/app/components/SingleProduct";
import getAllproducts from "@/app/utils/getAllproducts";
const productsPage = async ({ searchParams }) => {
    const products = await getAllproducts((searchParams.categoryId));
    return (
        <div>
            <p>This is products page:{products.length}</p>
            {products.map((product) => (
                <SingleProduct key={product.id} product={product}/>
            ))}
        </div>
    );
};

export default productsPage;