
const SinglePage = ({ params }) => {
    console.log(params.segments);
    const [year, id] = params.segments || [];
    return (
        <div>
            <h1>This post published on {year || new Date().getFullYear()} and post id is {id || ""}</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos aut sunt dolorum ut nihil autem impedit aliquam saepe est numquam officia nostrum quas deleniti, veritatis hic ad minus voluptatibus cum!</p>
        </div>
    );
};

export default SinglePage;