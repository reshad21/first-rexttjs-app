import getSingleProduct from "@/app/utils/getSingleProduct";

const page = async ({ params }) => {
    // console.log(params.id);
    const product = await getSingleProduct(params.id);
    return (
        <div>
            <h1>Single product information</h1>
            <h2>Product Name: {product.title}</h2>
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