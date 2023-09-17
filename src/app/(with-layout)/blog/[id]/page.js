import loadSingleBlogData from "@/app/utils/loadSingleBlogData";

const SinglePage = async({ params }) => {
    const {id} = params || {};
    const singleDetails = await loadSingleBlogData(id);
    console.log(singleDetails);
    const {title,body} = singleDetails;

    return (
        <div>
            <h1 className="font-bold text-xl">{title || ""}</h1>
            <p>{body || ""}</p>
        </div>
    );
};

export default SinglePage;