// 'use client'
import getAllCategories from "@/app/utils/getAllCategories";
import SingleCategory from "./SingleCategory";

const Categories = async () => {
    // const [category, setCategory] = useState([]);
    // useEffect(() => {
    //     fetch("http://localhost:5000/categories")
    //         .then((res) => res.json())
    //         .then((data) => setCategory(data))
    // }, [])
    // console.log(category);
    const categories = await getAllCategories();
    return (
        <div>
            <h1 className="mb-4 text-xl font-bold">Categories:{categories?.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-3">
                {
                    categories.map((category) => (
                        <SingleCategory key={category.id} category={category} />
                    ))
                }
            </div>
        </div>
    );
};

export default Categories;