
export const baseURL = "https://pergolapro.co.nz";
export const baseAppURL = "https://mebeat.com";
export const WeatherAPIKey = "25f65a7e6d5351f79e51cfd8fe03028b";
export const WpApiKey = "6txi-YEMe-XbHa-cjHq-6IXH-aCTp";
export const app_id = '';
export const app_secret = '';

export const authToken = GetToken();
export const authUserId = GetUserId();
export const authUserProfileId = GetUserProfileId();
export const authUserEmail = GetUserEmail();


export { UserLogout };
export { isUserLogged };


function GetToken() {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('access_token');
    }
}
function GetUserId() {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('UserAuthID');
    }
}
function GetUserProfileId() {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('UserProfileAuthID');
    }
}
function GetUserEmail() {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('UserAuthEmail');
    }
}
function UserLogout() {
    if (typeof window !== 'undefined') {
        localStorage.clear();
        window.location.href = "/login";
    }
}

function isUserLogged() {
    if (authToken === null) {
        window.location.href = "/login";
    }
}