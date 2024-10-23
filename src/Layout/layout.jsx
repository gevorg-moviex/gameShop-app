import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";

export default function Layout( {children, themeColor, language, setLanguage} ) {
    return (
        <>
            <Header background={themeColor} language={language} setLanguage={setLanguage} />
                {children}
            <Footer />
        </>
    )
};
