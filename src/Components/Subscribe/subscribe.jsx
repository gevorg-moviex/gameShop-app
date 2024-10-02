import subBg from "/Subscribe/subscribe-1.webp"

export default function Subscribe() {
    return (
        <div className="grid justify-center items-start w-full h-[570px]" style={
            {   background: `url(${subBg})`,
                backgroundAttachment: "fixed",
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
            }
        }>
            <div className="text-white flex flex-col items-center gap-11 mt-14 w-full">
                <div className="text-center w-56 flex flex-col justify-center items-center">
                    <span className="text-[32px] product340x:text-[42px] font-bold tracking-wide">NEWSLETTER</span>
                    <p>Sign up to receive updates on new products and special offers</p>
                </div>
                <div className="flex flex-col gap-3 w-full">
                    <label htmlFor="email" className="cursor-pointer">Email *</label>
                    <div>
                        <input type="email" name="" id="email" className="py-2 px-3 w-full product460x:w-full border-2 border-solid border-white bg-transparent rounded-2xl" />
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-between w-full items-center">
                    <div className="w-52 flex justify-center items-center gap-3">
                        <input type="checkbox" name="" id="check" className="text-xl"/>
                        <label htmlFor="check">Yes, subscribe me to your newsletter.</label>
                    </div>
                    <button className="py-1 h-9 px-4 bg-white border-none outline-none transition-all duration-[0.4s] text-black font-bold w-48 rounded-2xl hover:text-white border-2 border-white hover:border-solid hover:bg-[#8858ED]">Submit</button>
                </div>
            </div>
        </div>
    )
};
