
const Modal = () => {
    return (
        <dialog id="favDialog" className="w-[98%] max-w-[500px] rounded-md">
            <div className="text-right mb-4">
                <button>Close</button>
            </div>
            <form>
                <p>
                    <label>
                        Favorite animal:
                        <select>
                            <option value="default">Choose…</option>
                            <option>Brine shrimp</option>
                            <option>Red panda</option>
                            <option>Spider monkey</option>
                        </select>
                    </label>
                </p>
                <div>
                    <button value="cancel" formmethod="dialog">Cancel</button>
                    <button id="confirmBtn" value="default">Confirm</button>
                </div>
            </form>
        </dialog>

    );
};

export default Modal;