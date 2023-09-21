import Link from 'next/link';
import Modal from '../Homepage/Modal';

const ManageProducts = ({ products }) => {

    return (
        <div>
            <table class="border-collapse border border-slate-400 w-full text-center">
                <thead>
                    <tr>
                        <th class="border border-slate-300">Title</th>
                        <th class="border border-slate-300">Price</th>
                        <th class="border border-slate-300">Update</th>
                        <th class="border border-slate-300">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => (
                            <tr key={product.id} product={product}>
                                <td class="border border-slate-300">{product.title}</td>
                                <td class="border border-slate-300">{product.price}</td>
                                <td class="border border-slate-300"><Link href="" className="bg-green-700 px-2 py-1 inline-block my-1 text-white border border-green-600 rounded-md shadow-xl">Update</Link></td>
                                <td class="border border-slate-300"><Link href="" className="bg-rose-700 px-2 py-1 inline-block my-1 text-white border border-green-600 rounded-md shadow-xl">Delete</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Modal />
        </div>
    );
};

export default ManageProducts;