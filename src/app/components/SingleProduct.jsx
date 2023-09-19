import Link from "next/link";

const SingleProduct = ({ product }) => {
    const { title, id, price, features } = product;
    return (
        <div>
            <Link href={`/products/${id}`}>{title}</Link>
        </div>
    );
};

export default SingleProduct;