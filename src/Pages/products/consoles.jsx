import { consoles } from "../../../data";
import ProductSort from "../../Components/ProductSort/productSort";
import LayoutProducts from "../../Layout/layoutProducts";

export default function Consoles(){
    return (
        <LayoutProducts>
            <ProductSort database={consoles} title="Consoles" />
        </LayoutProducts>
    )
}