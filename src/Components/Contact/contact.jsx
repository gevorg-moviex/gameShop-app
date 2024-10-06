import { useRef, useState } from "react"

export default function ContactComponent(){
    const firstName = useRef(null);
    const lastName = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const messageRef = useRef(null);
    const [error, setError] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();

        if (firstName.current.value == "" || lastName.current.value == "" || emailRef.current.value == "" || phoneRef.current.value == "" || messageRef.current.value == ""){
            setError(true)
        }
        else {
            const obj = {
                userFirstName: firstName.current.value,
                userLastName: lastName.current.value,
                email: emailRef.current.value,
                phone: phoneRef.current.value,
                message: messageRef.current.value
            }    
        
            alert("Your info was sent Thanks")

            localStorage.setItem("contactInfo", JSON.stringify(obj))
            firstName.current.value = "";
            lastName.current.value = "";
            emailRef.current.value = "";
            phoneRef.current.value = "";
            messageRef.current.value = "";

            setError(false)
        }
    }
    
    return (
        <div className="flex w-full justify-center bg-black text-white lg:h-[90vh]  flex-col">
            <div className="flex justify-around  w-full flex-col gap-10 py-14 items-center lg:flex-row lg:py-0 lg:gap-0">
                <div className="flex flex-col gap-10 items-center lg:items-start product1000x:pl-5 product1280x:pl-0">
                    <div className="text-[50px] px-3 text-center product360x:px-0 sm:text-[70px] product360x:text-left font-bold">NEED A HAND?</div>
                    <div>
                        <span className="text-2xl">Contact Us</span>
                    </div>
                    <div className="flex flex-col text-center product360x:text-left px-2">
                        <a href="">info@mysite.com</a>
                        <span>123-456-7890</span>
                        <span>500 Terry Francine Street San Francisco, CA 94158</span>
                    </div>
                    <div className="w-full px-2 flex justify-center sm:w-auto">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196457.97986312365!2d43.994205494531236!3d39.702439299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4014d232638342ad%3A0xaaa6fa54b6b1247c!2z0JDRgNCw0YDQsNGC!5e0!3m2!1sru!2sam!4v1727639361778!5m2!1sru!2sam" 
                            className="w-[90%] rounded-2xl sm:w-[400px] "
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
                <form action="" onSubmit={handleSubmit} className="w-full sm:w-auto px-2 product460x:px-5">
                    <div className="flex px-4 flex-col gap-10 justify-center w-full sm:w-auto sm:px-16">
                        <div className="flex flex-col sm:flex-row gap-5">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="firstname">First Name*</label>
                                <input type="text" id="firstname" ref={firstName} className="py-2 px-3 bg-transparent border-2 border-[#8858ED] rounded-2xl outline-none" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="lastname">Last Name*</label>
                                <input type="text" id="lastname" ref={lastName} className="py-2 px-3 bg-transparent border-2 border-[#8858ED] rounded-2xl outline-none" />
                            </div>
                        </div>
                        <div className="flex flex-col w-full sm:flex-row gap-5">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="email">Email*</label>
                                <input type="text" id="email" ref={emailRef} className="py-2 px-3 bg-transparent border-2 border-[#8858ED] rounded-2xl outline-none" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="lastname">Phone*</label>
                                <input type="number" id="lastname" ref={phoneRef} className="py-2 px-3 bg-transparent border-2 border-[#8858ED] rounded-2xl outline-none" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="message">Leave us a message</label>
                            <textarea type="text" name="" id="message" ref={messageRef} maxLength="30" className="h-28 px-3 bg-transparent border-2 border-[#8858ED] resize-none rounded-2xl outline-none"></textarea>
                            {error && <div className="text-center mt-2">
                                    <span className="text-red-700 text-lg">All inputs field is not filled!</span>
                                </div>
                            }
                        </div>
                        <div onSubmit={handleSubmit} onClick={handleSubmit} className="w-full bg-[#8858ED] transition-all duration-500 border-black border-2 text-center py-2 cursor-pointer rounded-2xl hover:border-white">
                            <button className="font-bold" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}