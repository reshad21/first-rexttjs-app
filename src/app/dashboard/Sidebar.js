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
            <ul className="w-[150px]">
                {
                    sidebarItems.map(({ path, title }) => (
                        <li key={path}>
                            <Link href={path}>{title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Sidebar;