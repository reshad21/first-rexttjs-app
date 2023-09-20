import Link from "next/link";

const SingleProduct = ({ product }) => {
    const { title, id, price, features } = product;
    return (
        <div>
            <Link href={`/products/${id}`} className="border border-green-800 rounded-lg shadow-lg py-2 block text-center">{title}</Link>
        </div>
    );
};

export default SingleProduct;