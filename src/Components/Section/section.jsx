import section1 from '../../assets/section-1.webp'; 
import onSection from '../../assets/onSection-1.webp'; 

export default function Section() {
    return (
        <section 
            style={{
                backgroundImage: `url(${section1})`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: "top",
                height: "700px",
                position: 'relative',
                display: 'flex',
                gap: "90px",
                padding: '20px' 
        }}>
            <div className='w-[600px] h-[385px] flex flex-col justify-center pl-14 text-white font-bold gap-5 bg-[#8858ED] relative left-36 z-10 top-20 rounded-3xl'>
                <h2 className='text-2xl'>Power up your game</h2>
                <h1 className='text-7xl font-extrabold'>CYBER KID INFINITE</h1>
                <h2 className='text-2xl'>Now Available on PC & Console</h2>
                <button className='transition-all duration-500 px-4 py-3 rounded-3xl w-32 bg-white text-[#8858ED] hover:bg-transparent border border-solid border-white hover:text-white'>Buy Now</button>
            </div>
            <img src={onSection} alt="" className='absolute right-32 top-20 h-[690px] rounded-3xl z-0'/>
        </section>
    )
};
