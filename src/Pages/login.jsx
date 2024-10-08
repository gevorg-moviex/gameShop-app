import LoginComponent from "../Components/Login/login";

export default function Login( {isLoggedIn, setIsLoggedIn} ) {
    return (
        <LoginComponent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    )
};
