import Link from "next/link";

const SingleCategory = ({ category }) => {
    const { name, id, image_url } = category;
    return (
        <div>
            <Link href={`/products?categoryId=${id}`}>{name}</Link>
        </div>
    );
};

export default SingleCategory;