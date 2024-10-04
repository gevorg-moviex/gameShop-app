import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function LoginComponent() {

    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function handleGetInfo(e){
        e.preventDefault()
        const info = JSON.parse(localStorage.getItem("info") || [])

        const user = info.filter(user => user.userEmail === email && user.userPassword === password )
        
        if (user.length > 0){
            navigate("/")
        }else{
            setErrorMessage("Incorrect email or password!")
        }        
    }
    
    return (
        <div className="p-4 flex justify-center h-[100vh] items-center bg-[#020202] border-b border-gray-500">
            <form onSubmit={handleGetInfo}>
                <div className="flex flex-col justify-center py-10 items-center rounded-xl gap-5 border border-black border-solid p-3 w-80 shadow-custom-2-shadow bg-[#213243] text-white ">
                    <h1 className="text-2xl font-bold">Login</h1>
                    <div className="flex flex-col gap-3 w-4/5">
                        <label htmlFor="email">Email</label>
                        <input autoComplete="current-password" type="text" id="email" placeholder="Enter your email..." onChange={e => setEmail(e.target.value)} className="bg-transparent rounded-full outline-none shadow-inputsShadow h-8 px-4 py-[20px]" />
                        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                    </div>
                    <div className="flex flex-col gap-3 w-4/5">
                        <label htmlFor="password">Password</label>
                        <input autoComplete="current-password" type="password" id="password" placeholder="Enter your password..." onChange={e => setPassword(e.target.value)} className="bg-transparent rounded-full outline-none shadow-inputsShadow h-8 px-4 py-[20px]" />
                        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                    </div>
                    <button type="submit" className="w-28 rounded-full bg-[#03BFA9] outline-none border-none text-white py-2">Log in</button>
                    <p className="text-sm">Don`t have an account? <b className="cursor-pointer hover:border-b-2 border-[#03BFA9] pb-[2px]"><Link to="/register">Register</Link></b></p>
                </div>
            </form>
        </div>
    );
}