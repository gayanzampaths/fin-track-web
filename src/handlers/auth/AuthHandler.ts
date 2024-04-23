import { Credentials } from "../../models/Credentials";

export const setToken = (token: string) => {
    localStorage.setItem('authToken', token); 
};

export const getToken = () => {
    return localStorage.getItem('authToken');
};

const removeToken = () => {
    localStorage.removeItem('authToken');
};

export const signIn = async (credentials: Credentials): Promise<string> => {
    // In reality, you'd send credentials to a backend authentication API
    if (credentials.email === 'user@mail.com' && credentials.password === 'pass') {
        const token = 'my-sample-token'; // A simple fake token
        setToken( token );
        return token;
    } else {
        throw new Error('Invalid credentials');
    }
};

export const signUp = async (credentials: Credentials): Promise<string> => {
    // In reality, you'd send credentials to a backend authentication API
    if (credentials.email === 'user@mail.com' && credentials.password === 'pass') {
        const token = 'my-sample-token'; // A simple fake token
        setToken( token );
        return token;
    } else {
        throw new Error('Invalid credentials');
    }
};

export const signOut = () => {
    removeToken();
};