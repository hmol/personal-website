class Auth {


    constructor() {

    }

    static get isAuthenticated(): boolean {
        let token = localStorage.getItem('jwt-token');
        if(token) {
            return true;
        }
        return false;
    }

    static setToken(token: string) {
        localStorage.setItem('jwt-token', token);
    }

    static removeToken() {
        localStorage.removeItem('jwt-token');
    }

    static getToken() {
        return localStorage.getItem('jwt-token');
    }
}

const auth = new Auth();

export default Auth;

