import getSingleProduct from "@/app/utils/getSingleProduct";

const page = async ({ params }) => {
    // console.log(params.id);
    const product = await getSingleProduct(params.id);
    return (
        <div className="my-3 border border-green-800 block rounded-lg shadow-lg p-3">
            <h2 className="font-bold">Product Name: {product.title}</h2>
            <p>price: {product.price}</p>
            <p>Features: 
                {product.features.map((feature, index) => (
                    <span key={index}>
                        {index > 0 && ', '}{feature}
                    </span>
                ))}
            </p>
        </div>
    );
};

export default page;