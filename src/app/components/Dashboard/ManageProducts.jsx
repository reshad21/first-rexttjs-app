"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import Modal from '../Homepage/Modal';

const ManageProducts = ({ products }) => {
    const modalRef = useRef(null);
    const router = useRouter();
    const [updateData, setUpdateData] = useState(null);

    const openModal = (products) => {
        setUpdateData(products);
        modalRef.current.showModal();
    }

    const closeModal = () => {
        setUpdateData(null);
        modalRef.current.close();
    }

    const handleModalForm = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const price = form.price.value;

        const data = { title, price };
        if (title && price) {
            try {
                const res = await fetch(`http://localhost:5000/products/${updateData?.id}`, {
                    method: "PATCH",
                    headers: {
                        'content-type': "application/json",
                    },
                    body: JSON.stringify(data)
                });
                const result = await res.json();
                console.log(result);
                form.reset();
                closeModal();
                router.refresh();
            } catch (error) {
                console.log(error);
            }
        }
    }

    const handleDelete = async (id) => {

        try {
            const res = await fetch(`http://localhost:5000/products/${id}`, {
                method: "DELETE",
            });
            const result = await res.json();
            console.log(result);
            closeModal();
            router.refresh();
        } catch (error) {
            console.log(error);
        }
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
                                <td className="border border-slate-300"><Link href="" onClick={() => handleDelete(product.id)} className="bg-rose-700 px-2 py-1 inline-block my-1 text-white border border-green-600 rounded-md shadow-xl">Delete</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Modal ref={modalRef} closeModal={closeModal} updateData={updateData} handleModalForm={handleModalForm} />
        </div>
    );
};

export default ManageProducts;