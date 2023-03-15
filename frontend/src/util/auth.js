import { redirect } from "react-router-dom";

export function getTokenDuration() {    //this function retrieves the expiration time from local storage and compares the difference between then and now
    const storedExpirationDate = localStorage.getItem('expiration'); //retrieve token expiration time from storage
    const expirationDate = new Date(storedExpirationDate);  //convert ISO string into Date format
    const now = new Date(); //current date/time
    const duration = expirationDate.getTime() - now.getTime();  //subtract the difference
    return duration;
}

export function getAuthToken() {    //this function retrieves token from local storage and checks for expiration
    const token = localStorage.getItem('token');

    if (!token) {
        return null;
    }

    const tokenDuration = getTokenDuration();

    if (tokenDuration < 0) {
        return 'EXPIRED';
    }

    return token;
};

export function tokenLoader() { //this function determines if there is a token, provides theis info to other component
    return getAuthToken();  //routes in order to disable certain functionality while not logged in
};

export function protectLoader() {   //this function protects from access to certain routes while not logged in
    const token = getAuthToken();

    if (!token) {
        return redirect('/auth?mode=login');
    }

    return null;
};