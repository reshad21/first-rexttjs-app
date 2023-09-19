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
            <h1>THis is category:{categories?.length}</h1>
            {
                categories.map((category) => (
                    <SingleCategory key={category.id} category={category} />
                ))
            }
        </div>
    );
};

export default Categories;