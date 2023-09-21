import { forwardRef, useRef } from "react";

const Modal = ({ closeModal, updateData }, ref) => {
    const formRef = useRef(null)
    return (
        <dialog ref={ref} className="w-[98%] max-w-[500px] rounded-md p-4">
            <div className="text-right mb-4">
                <button className="bg-slate-700 text-white px-3 py-1 rounded-md" onClick={() => {
                    closeModal();
                    formRef.current.reset();
                }}>Close</button>
            </div>
            <form ref={formRef}>
                <input className="w-full mb-2 p-2 focus:outline-none border rounded-sm font-semibold" type="text" name="title" defaultValue={updateData?.title} />
                <input className="w-full mb-2 p-2 focus:outline-none border rounded-sm font-semibold" type="text" name="title" defaultValue={updateData?.price} />
                <button className="text-white px-2 py-1 rounded-md bg-lime-500 ">Submit</button>
            </form>
        </dialog>

    );
};

export default forwardRef(Modal);