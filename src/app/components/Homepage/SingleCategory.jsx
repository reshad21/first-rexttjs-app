import Link from "next/link";

const SingleCategory = ({ category }) => {
    const { name, id, image_url } = category;
    return (
        <div>
            <Link href={`/products?categoryId=${id}`} className="border rounded-lg border-green-600 px-4 py-2 shadow-xl block">{name}</Link>
        </div>
    );
};

export default SingleCategory;