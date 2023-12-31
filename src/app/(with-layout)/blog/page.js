
import loadBlogData from "@/app/utils/loadBlogData";
import Link from "next/link";

export const metadata = {
    title: 'Blogs | Next Hero',
    description: 'Generated by create next app',
}

const BlogsPage = async () => {
    const blogsItem = await loadBlogData();

    return (
        <div>
            <h1 className="my-2">This is blog page and total blog: {blogsItem.length}</h1>
            {
                blogsItem.map(({ id, body, title }) => (
                    <div className="border border-blue-800 mb-2 p-3" key={id}>
                        <h1><span className="font-bold">{id}.</span> {title}</h1>
                        <Link href={{
                            pathname: `/blog/${id}`,
                            query: {
                                title: title
                            }
                        }} className="btn bg-blue-400 text-white p-2 inline-block">Details</Link>
                    </div>
                )
                )
            }
        </div>
    );
};

export default BlogsPage;