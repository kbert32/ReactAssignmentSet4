import { Link, useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();     //useNavigate can be used to navigate programmatically

    function navigateHandler() {
        navigate('/products');
    };

    return (                                    //without '/' in front of the 'products' link, this is a relative path
    <>
        <h1>My Home Page</h1>
        <p>
            Go to <Link to="products">the list of products</Link>.     
        </p>
        <p>
            <button onClick={navigateHandler}>Navigate</button>
        </p>
    </>
    );
};

export default HomePage;