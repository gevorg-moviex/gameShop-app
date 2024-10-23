import Decorative from "../Components/Decorative/decorative";
import Portfolio from "../Components/Portfolio/portfolio";
import ProductsComponent from "../Components/Products/products";
import Promotional from "../Components/Promotional/promotional";
import Section from "../Components/Section/section";
import Subscribe from "../Components/Subscribe/subscribe";
import Layout from "../Layout/layout";
import { product3, products2, products1 } from "../../data";
import { product3Am, products2Am, products1Am } from "../../dataAm";


export default function Home( {language, setLanguage} ){
    return (
        <Layout language={language} setLanguage={setLanguage}>
            <Section language={language} />
            <ProductsComponent dataProduct={language ? products1Am : products1} language={language} title={language ? "Լավագույն վաճառվածներ" : "BEST SELLERS" }  />
            <Portfolio language={language}/>  
            <ProductsComponent dataProduct={language ? products2Am : products2} language={language}  title={language ? "Արդիականացրեք ձեր պարագաները" : "UPGRADE YOUR GEAR" } />
            <Promotional language={language} /> 
            <ProductsComponent dataProduct={language ? product3Am : product3}  language={language}  title={language ? "ԹՐԵՆԴԱՅԻՆ ԽԱՂԵՐ" : "TRENDING GAMES" } />
            <Subscribe />   
            <Decorative /> 
        </Layout>
    )
}