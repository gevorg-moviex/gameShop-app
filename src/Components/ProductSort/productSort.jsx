export default function ProductSort( {database} ) {
    return (
        <div>
            <span>{database.length}</span>
            <div className="grid grid-cols-1 product1070x:grid-cols-2 product1330x:grid-cols-3">
                {database.map(item => (
                    <div key={item.id} className="flex flex-col justify-around gap-3 items-center py-6 text-white">
                        <img src={item.imageUrl} alt="" className='w-64 cursor-pointer object-cover transition-transform duration-300 ease-in-out transform hover:scale-110' />
                        <h2 className='text-lg font-bold text-center product380x:text-left'>{item.title}</h2>
                        <p>{item.price}</p>
                        <button className='w-[70%] transition-all duration-300 border-none outline-none bg-[#8858ED] text-white rounded-2xl py-1.5 hover:bg-white hover:text-[#8858ED]' onClick={() => handleBookmark(item)}>
                            Add to Cart 
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
};
