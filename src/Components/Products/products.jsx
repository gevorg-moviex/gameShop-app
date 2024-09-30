    import { useCallback, useState } from 'react';
    import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
    import useBookmarkStore from '../../Store/useBookmarkStore';

    export default function ProductsComponent({ dataProduct, title }) {
        const [currentIndex, setCurrentIndex] = useState(0);
        const [isTransitioning, setIsTransitioning] = useState(false);
        const productsPerPage = 4;
        const { addBookmark, bookmarks } = useBookmarkStore();

        const handleBookmark = useCallback((item) => {
            addBookmark(item);
        }, [addBookmark]);

        const nextPage = () => {
            if (currentIndex + productsPerPage < dataProduct.length) {
                setIsTransitioning(true);
                setTimeout(() => {
                    setCurrentIndex(currentIndex + productsPerPage);
                }, 500);
            }
        };

        const prevPage = () => {
            if (currentIndex - productsPerPage >= 0) {
                setIsTransitioning(true);
                setTimeout(() => {
                    setCurrentIndex(currentIndex - productsPerPage);
                }, 500);
            }
        };

        const handleTransitionEnd = () => {
            setIsTransitioning(false);
        };

        return (
            <div className='bg-[#060506] pt-36 pb-12 flex justify-center'>
                <div className='flex flex-col gap-10'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-white text-5xl font-bold'>{title}</h1>
                        <button className='bg-white transition-all duration-300 text-[#8858ED] font-bold w-36 py-1.5 rounded-2xl hover:border-2 border-solid border-white hover:bg-[#8858ED] hover:text-white'>
                            View All
                        </button>
                    </div>
                    <div className='relative'>
                        <div
                            className={`grid grid-cols-4 gap-6 justify-center items-center text-white transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                            onTransitionEnd={handleTransitionEnd}
                        >
                            {dataProduct.slice(currentIndex, currentIndex + productsPerPage).map(item => {
                                const bookmark = bookmarks.find(b => b.id === item.id);
                                const count = bookmark ? bookmark.count : 0;

                                return (
                                    <div key={item.id} className="flex flex-col justify-around gap-3 items-center py-6">
                                        <img src={item.imageUrl} alt="" className='max-w-64 max-h-64 cursor-pointer object-cover transition-transform duration-300 ease-in-out transform hover:scale-110' />
                                        <h2 className='text-lg font-bold'>{item.title}</h2>
                                        <p>{item.price}</p>
                                        <button className='w-[70%] transition-all duration-300 border-none outline-none bg-[#8858ED] text-white rounded-2xl py-1.5 hover:bg-white hover:text-[#8858ED]' onClick={() => handleBookmark(item)}>
                                            Add to Cart {count > 0 ? `(${count})` : ''}
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                        <div className='absolute top-[40%] -left-11 transform -translate-y-1/2'>
                            <button onClick={prevPage} disabled={currentIndex === 0} className='bg-transparent text-white p-2 hover:opacity-80'>
                                <FaArrowLeft />
                            </button>
                        </div>
                        <div className='absolute top-[40%] -right-11 transform -translate-y-1/2'>
                            <button onClick={nextPage} disabled={currentIndex + productsPerPage >= dataProduct.length} className='bg-transparent text-white p-2 hover:opacity-80'>
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
