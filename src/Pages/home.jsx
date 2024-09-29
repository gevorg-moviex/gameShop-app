import Decorative from "../Components/Decorative/decorative";
import Portfolio from "../Components/Portfolio/portfolio";
import ProductsComponent from "../Components/Products/products";
import Promotional from "../Components/Promotional/promotional";
import Section from "../Components/Section/section";
import Subscribe from "../Components/Subscribe/subscribe";
import Layout from "../Layout/layout";
import { product3, products2, products1 } from "../../data";

export default function Home(){
    return (
        <Layout>
            <Section />
            <ProductsComponent dataProduct={products1} title="BEST SELLERS"/>
            <Portfolio />
            <ProductsComponent dataProduct={products2} title={"UPGRADE YOUR GEAR"} />
            <Promotional /> 
            <ProductsComponent dataProduct={product3} title={"TRENDING GAMES"} />
            <Subscribe />
            <Decorative />
        </Layout>
    )
}