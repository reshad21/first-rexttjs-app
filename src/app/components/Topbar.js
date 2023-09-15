import Link from "next/link";

const Topbar = () => {
    const navLinks = [
        {
            path: "/",
            title: "Home"
        },
        {
            path: "/about",
            title: "About"
        },
        {
            path: "/profile",
            title: "Profile"
        },
        {
            path: "/blog",
            title: "Blog"
        },
        {
            path: "/dashboard",
            title: "dashboard"
        }
    ]
    return (
        <div className="flex justify-between items-center">
            <h1 className="text-2xl">Next Hero</h1>
            <ul className="flex justify-center items-center gap-2">
                {
                    navLinks.map((item) => (
                        <li key={item.path} className="border border-slate-800 px-3 py-1">
                            <Link href={item.path}>{item.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Topbar;