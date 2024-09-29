import { useCallback, useState } from "react";
import useBookmarkStore from "../../Store/useBookmarkStore";
import useModal from "../useModal/useModal";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function BookmarkFunction() {
    const { isModalOpen, setModalOpen } = useModal();
    const { bookmarks, removeBookmark, clearBookmark, updateBookmarkPlus, updateBookmarkMinus } = useBookmarkStore();

    return (
        <>
        <div>
            <i className="fa-solid fa-cart-shopping cursor-pointer relative" onClick={() => setModalOpen(true)}></i>
            <span className="relative right-3 bottom-4">{bookmarks.length}</span>
        </div>

        {isModalOpen && (
            <div className="fixed inset-0 bg-gray-600 z-[1000] bg-opacity-50 flex items-center justify-center">
                <div className={`bg-black p-5 rounded-lg max-h-[70%] ${bookmarks.length === 0 ? "overflow-hidden" : "overflow-y-scroll"}`}>
                    <div className='flex w-full justify-between items-center gap-4 mb-4'>
                        <h2 className="font-bold text-xl">Bookmarked Items</h2>
                        <i 
                            className="fa-solid fa-xmark font-bold text-xl cursor-pointer hover:text-red-500" 
                            onClick={() => setModalOpen(false)}
                        ></i>
                    </div>
                    {bookmarks.length === 0 ? (
                        <p>No items bookmarked.</p>
                    ) : (
                        <ul className="flex flex-col gap-4 justify-center">
                            {bookmarks.map(item => (
                                <li key={item.id} className="border-b py-2 flex gap-4 items-center">
                                    <img src={item.imageUrl} alt={item.title} className="w-24 h-24 object-cover"/>
                                    <div className="text-left">
                                        <h3 className="font-bold">{item.title}</h3>
                                        <h3 className="text-sm">{"$" + item.count * parseInt(item.price.slice(1))}</h3>
                                        <div className="flex items-center gap-4">
                                            <button 
                                                className="text-red-700 cursor-pointer" 
                                                onClick={() => removeBookmark(item.id)}
                                            >
                                                Delete
                                            </button>
                                            <div className="flex items-center justify-center gap-2 text-sm">
                                                <FaMinus onClick={() => updateBookmarkMinus(item.id)} className="cursor-pointer"/>
                                                <span>{item.count}</span>
                                                <FaPlus onClick={() => updateBookmarkPlus(item.id)} className="cursor-pointer"/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                    <button     
                        className="mt-4 transition-all duration-300 border-none outline-none bg-[#8858ED] text-white rounded-2xl py-1.5 px-5 hover:bg-white hover:text-[#8858ED]" 
                        onClick={clearBookmark}   
                    >
                        Clear All
                    </button>
                </div>
            </div>
        )}
        </>
    )
};
