import { bestSellers } from "../../../data";
import ProductSort from "../../Components/ProductSort/productSort";
import LayoutProducts from "../../Layout/layoutProducts";

export default function BestSellers(){
    return (
        <LayoutProducts>
            <ProductSort database={bestSellers} title="Best Sellers" />
        </LayoutProducts>
    )
}