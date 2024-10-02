import { accesories } from "../../../data";
import ProductSort from "../../Components/ProductSort/productSort";
import LayoutProducts from "../../Layout/layoutProducts";

export default function Accesories(){
    return (
        <LayoutProducts>
            <ProductSort database={accesories} title="Accesories" />
        </LayoutProducts>
    )
}