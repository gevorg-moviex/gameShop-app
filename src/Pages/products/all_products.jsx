import { products1 } from "../../../data";
import ProductSort from "../../Components/ProductSort/productSort";
import LayoutProducts from "../../Layout/layoutProducts";

export default function AllProduct(){
    return (
        <LayoutProducts>
            <ProductSort database={products1} />
        </LayoutProducts>
    )
}