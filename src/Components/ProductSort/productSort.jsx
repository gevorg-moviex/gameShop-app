import { useCallback, useState } from "react";
import useBookmarkStore from "../../Store/useBookmarkStore";

export default function ProductSort( {database, title} ) {
    const { addBookmark, bookmarks } = useBookmarkStore();
    const [show, setShow] = useState(false);

    const handleBookmark = useCallback((item) => {
        addBookmark(item);
    }, [addBookmark]);

    return (
        <div className="flex flex-col gap-y-8 text-white mt-4">
            <h1 className="text-5xl product360x:text-7xl">{title}</h1>
            <span className="text-white">{`${database.length} products`}</span>
            <div className="grid grid-cols-1 product970x:grid-cols-2 gap-6 product1070x:grid-cols-3 product1330x:grid-cols-3">
                {database.slice(0, show ? database.length : 9).map(item => {
                    const bookmark = bookmarks.find(b => b.id === item.id);
                    const count = bookmark ? bookmark.count : 0;
                    return (
                        <div key={item.id} className="flex flex-col justify-around gap-3 items-center py-6 text-white">
                            <img src={item.imageUrl} alt="" className='w-64 product1455x:w-[300px] product1770x:w-[400px] cursor-pointer object-cover transition-transform duration-300 ease-in-out transform hover:scale-110' />
                            <h2 className='text-lg font-bold text-center product380x:text-left'>{item.title}</h2>
                            <p>{item.price}</p>
                            <button className='w-[70%] transition-all duration-300 border-none outline-none bg-[#8858ED] text-white rounded-2xl py-1.5 hover:bg-white hover:text-[#8858ED]' onClick={() => handleBookmark(item)}>
                                Add to Cart {count > 0 ? `(${count})` : ''}
                            </button>
                        </div>
                    )
                })}
            </div>
            {database.length > 9 && (
                <div className="flex justify-center">
                    <button className="px-7 py-2 text-white bg-[#8858ED] rounded-3xl border-none outline-none transition-all duration-300 hover:opacity-[0.4]" onClick={() => setShow(!show)}>{show ? "Hide" : "Load More"}</button>
                </div>
            )}
        </div>
    )
};
