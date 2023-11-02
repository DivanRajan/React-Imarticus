import { useContext } from "react";
import { MyContext } from "./MyContext";

function Product(){
    const {text,setText}=useContext(MyContext);

    return(
        <>
        <h1>{text}</h1>
        <button onClick={()=>setText('Product details')}>
            Click
        </button>
        </>
    )
}

export default Product;