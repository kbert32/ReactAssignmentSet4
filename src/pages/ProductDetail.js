import { Link, useParams } from "react-router-dom";

function ProductDetailPage() {
    const params = useParams();

    return (
        <>
            <h1>Product Details!</h1>
            <p>{params.productId}</p>
            <p><Link to=".." relative='path'>Back</Link></p>   
        </>
    );          //".." means go up a directory, since this is a relative link, the 'relative' prop can be used to specify
};              //if it should be relative to the URL or the path

export default ProductDetailPage;