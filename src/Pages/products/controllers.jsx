import { controllers } from "../../../data";
import ProductSort from "../../Components/ProductSort/productSort";
import LayoutProducts from "../../Layout/layoutProducts";

export default function Controllers(){
    return (
        <LayoutProducts>
            <ProductSort database={controllers} title="Controllers" />
        </LayoutProducts>
    )
}