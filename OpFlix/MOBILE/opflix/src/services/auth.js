export const ParseJwt = () =>{
    var token = localStorage.getItem("@opflix:token").split('.');
    var base64Url = token[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
}