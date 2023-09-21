import Link from "next/link";

const sidebarItems = [

    {
        path: "/",
        title: "Home"
    },
    {
        path: "/dashboard/add-product",
        title: "Add product"
    },
    {
        path: "/dashboard/manage-product",
        title: "Manage product"
    }
]
const Sidebar = () => {
    return (
        <div>
            <ul className="w-[150px] flex flex-col gap-2">
                {
                    sidebarItems.map(({ path, title }) => (
                        <li key={path}>
                            <Link href={path} className="border border-green-700 shadow-xl block py-2 text-center">{title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Sidebar;