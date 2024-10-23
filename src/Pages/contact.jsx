import ContactComponent from "../Components/Contact/contact";
import Layout from "../Layout/layout";

export default function Contact( {language, setLanguage} ){
    return (
        <Layout themeColor="dark" language={language} setLanguage={setLanguage} >
            <ContactComponent language={language} />
        </Layout>
    )
}