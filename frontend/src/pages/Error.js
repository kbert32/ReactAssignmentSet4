import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";

function ErrorPage(){
    const error = useRouteError();
    
    let title = 'An error occurred!';
    let message = 'Something went wrong!';

    if (error.status === 500) {
        // message = JSON.parse(error.data).message;    //Max's method, I like mine better
        // message = error.statusText;                     //My method
        // title = error.data;          //also My method, additional text or objects can be sent through the data prop
        message = error.data.message;   //can be done this way when error was sent using react router's 'json' function
        // message = error.statusText;     //alternative way using 'json' function
    }

    if (error.status === 404) {
        title = 'Not found!';
        message = 'Could not find resource or page.';
    }

    return (
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>        
        </>
    );
};

export default ErrorPage;