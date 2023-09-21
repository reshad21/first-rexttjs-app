"use client"
import Link from 'next/link';
import { useRef, useState } from 'react';
import Modal from '../Homepage/Modal';

const ManageProducts = ({ products }) => {
    const modalRef = useRef(null);
    const [updateData, setUpdateData] = useState(null);

    const openModal = (products) => {
        setUpdateData(products);
        modalRef.current.showModal();
    }

    const closeModal = () => {
        setUpdateData(null);
        modalRef.current.close();
    }

    return (
        <div>
            <table className="border-collapse border border-slate-400 w-full text-center">
                <thead>
                    <tr>
                        <th className="border border-slate-300">Price</th>
                        <th className="border border-slate-300">Title</th>
                        <th className="border border-slate-300">Update</th>
                        <th className="border border-slate-300">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => (
                            <tr key={product.id} product={product}>
                                <td className="border border-slate-300">{product.title}</td>
                                <td className="border border-slate-300">{product.price}</td>
                                <td className="border border-slate-300"><Link href="" onClick={() => openModal(product)} className="bg-green-700 px-2 py-1 inline-block my-1 text-white border border-green-600 rounded-md shadow-xl">Update</Link></td>
                                <td className="border border-slate-300"><Link href="" className="bg-rose-700 px-2 py-1 inline-block my-1 text-white border border-green-600 rounded-md shadow-xl">Delete</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Modal ref={modalRef} closeModal={closeModal} updateData={updateData} />
        </div>
    );
};

export default ManageProducts;