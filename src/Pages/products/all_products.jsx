import { allProducts } from "../../../data";
import { allProductsaAm } from "../../../dataAm";
import ProductSort from "../../Components/ProductSort/productSort";
import LayoutProducts from "../../Layout/layoutProducts";

export default function AllProduct( {language, setLanguage} ){
    return (
        <LayoutProducts language={language} setLanguage={setLanguage}>
            <ProductSort database={language ? allProductsaAm : allProducts} title="All Products" />
        </LayoutProducts>   
    )
}