import loadBlogData from "@/app/utils/loadBlogData";
import loadSingleBlogData from "@/app/utils/loadSingleBlogData";

export const generateMetadata = async ({ params }) => {
    const { title } = await loadSingleBlogData(params.id)
    return {
        title: title,
    }
}

export const generateStaticParams = async () => {
    const blogs = await loadBlogData();
    return blogs.map(({ id }) => ({
        id: id.toString(),
    }))
}

const SinglePage = async ({ params }) => {
    const { id } = params || {};
    const singleDetails = await loadSingleBlogData(id);
    const { title, body } = singleDetails;

    return (
        <div>
            <h1 className="font-bold text-xl">{title || ""}</h1>
            <p>{body || ""}</p>
        </div>
    );
};

export default SinglePage;