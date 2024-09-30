import section1 from '../../assets/section-1.webp'; 
import onSection from '../../assets/onSection-1.webp'; 

export default function Section() {
    return (
        <section className='h-auto flex-col items-center section885x:h-[700px] section885x:flex-row section885x:items-start' 
            style={{
                backgroundImage: `url(${section1})`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: "top",
                position: 'relative',
                display: 'flex',
                gap: window.innerWidth < 885 ? "40px" : "90px",
                padding: window.innerWidth < 885 ? "40px" : "20px"
        }}>
            <div className='w-auto h-auto py-8 px-6 text-center items-center static flex flex-col justify-center sm:px-0 sm:pl-9 sm:text-left sm:items-start sm:w-[600px] text-white sm:h-[385px] font-bold gap-5 bg-[#8858ED] section885x:relative left-36 z-10 top-20 rounded-3xl'>
                <h2 className='text-2xl'>Power up your game</h2>
                <h1 className='text-5xl font-extrabold'>CYBER KID INFINITE</h1>
                <h2 className='text-2xl'>Now Available on PC & Console</h2>
                <button className='transition-all duration-500 px-4 py-3 rounded-3xl w-32 bg-white text-[#8858ED] hover:bg-transparent border border-solid border-white hover:text-white'>Buy Now</button>
            </div>
            <img src={onSection} alt="" className='static w-auto h-auto sm:h-[690px] sm:w-[536px] section885x:absolute right-32 top-20  section885x::w-auto rounded-3xl z-0'/>
        </section>
    )
};