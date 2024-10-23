import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import useBookmarkStore from '../../Store/useBookmarkStore';
import { Autoplay, Pagination } from 'swiper/modules';
import "./products.css";

export default function ProductsComponent({ dataProduct, title, language }) {
    const { addBookmark, bookmarks } = useBookmarkStore();
    const [slidesPerView, setSlidesPerView] = useState(4)

    const updateSlidesPerView = () => {
        const width = window.innerWidth;
        if (width > 1450){
            setSlidesPerView(4)
        }else if (width > 1045){
            setSlidesPerView(3)
        }else if (width > 700){
            setSlidesPerView(2)
        }else if (width > 0){
            setSlidesPerView(1)
        }
        
    }

    useEffect(() => {
        updateSlidesPerView()

        window.addEventListener("resize", updateSlidesPerView)

        return () => {
            window.removeEventListener("resize", updateSlidesPerView)
        }
    }, [])

    const handleBookmark = useCallback((item) => {
        addBookmark(item);
    }, [addBookmark]);

    return (
        <div className='bg-[#060506] pt-8 md:pt-36 pb-16 flex justify-center'>
            <div className='flex flex-col gap-10 w-[80%]'>
                <div className='flex  product660x:w-auto flex-col gap-7 product970x:justify-between product970x:gap-0 product970x:flex-row items-center'>
                    <h1 className='text-white text-center text-4xl font-bold'>{title}</h1>
                    <Link to={"/products/allProducts"}>
                        <button className='bg-white transition-all duration-300 text-[#8858ED] font-bold w-36 py-1.5 rounded-2xl hover:border-2 border-solid border-white hover:bg-[#8858ED] hover:text-white'>
                            {`${language ? "Դիտել Բոլորը" : "View All"}`}
                        </button>
                    </Link>
                </div>
                <div className='relative'>
                    <Swiper 
                        slidesPerView={slidesPerView}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 2000 }}
                        modules={[Autoplay, Pagination]}
                        className='grid grid-cols-3 product1520px:grid-cols-grid4xauto gap-6 justify-center items-center text-white transition-opacity duration-500'>
                        {dataProduct.map(item => {
                            const bookmark = bookmarks.find(b => b.id === item.id);
                            const count = bookmark ? bookmark.count : 0;

                            return (
                                <SwiperSlide key={item.id}>
                                    <div className="flex flex-col justify-around gap-3 items-center py-6">
                                        <Link to={`/item?id=${item.id}`}>
                                            <img src={item.imageUrl} alt={item.title} className='max-w-64 max-h-64 cursor-pointer object-cover transition-transform duration-300 ease-in-out transform hover:scale-[1.09]' />
                                        </Link>
                                        <h2 className='text-lg font-bold'>{item.title}</h2>
                                        <p>{item.price}</p>
                                        <button className='w-[70%] transition-all duration-300 border-none outline-none bg-[#8858ED] text-white rounded-2xl py-1.5 hover:bg-white hover:text-[#8858ED]' onClick={() => handleBookmark(item)}>
                                            Add to Cart {count > 0 ? `(${count})` : ''}
                                        </button>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>  
            </div>
        </div>
    );
}
