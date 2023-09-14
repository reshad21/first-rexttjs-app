
const layout = ({ children }) => {
    return (
        <div>
            <nav>
                <ul className='flex gap-2'>
                    <li><a className='btn-outline border-green-700 rounded-sm border-[2px] p-1' href="/">Home</a></li>
                    <li><a className='btn-outline border-green-700 rounded-sm border-[2px] p-1' href="/about">About</a></li>
                    <li><a className='btn-outline border-green-700 rounded-sm border-[2px] p-1' href="/profile">Profile</a></li>
                    <li><a className='btn-outline border-green-700 rounded-sm border-[2px] p-1' href="/dashboard">Dashboard</a></li>
                    <li><a className='btn-outline border-green-700 rounded-sm border-[2px] p-1' href="/blog">Blogs</a></li>
                </ul>
            </nav>
            {children}
            <div>Footer section</div>
        </div>
    );
};

export default layout;